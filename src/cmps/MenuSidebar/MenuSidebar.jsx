import { useEffect, useState } from 'react'
import { LibraryMenu } from '../LibraryMenu'
import { StationList } from '../StationList'
import { userService } from '../../services/user/user.service.remote'
import { useDispatch, useSelector } from 'react-redux'
import { SET_USER } from '../../store/reducers/user.reducer'
import { useNavigate } from 'react-router'
import { StationPreview } from '../StationPreview'
import { updateUser } from '../../store/actions/backend.user'
import { socketService } from '../../services/socket.service'
import { SearchBar } from '../SearchBar'
import { showErrorMsg } from '../../services/event-bus.service'

export function MenuSidebar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.userModule.user)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isBelowThreshold, setIsBelowThreshold] = useState(false)
  const [selected, setSelected] = useState(null)
  const [filteredStations, setFilteredStations] = useState(user?.likedStations || [])
  const [searchTerm, setSearchTerm] = useState('')

  

  useEffect(() => {
    getUser()
    // if (!user) navigate('/auth/login')
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    // Filter stations based on the search term
    if (searchTerm) {
      try {
        const regex = new RegExp(searchTerm, 'i') // 'i' flag makes it case-insensitive
        const filtered = user?.likedStations.filter(station =>
          regex.test(station.name)
        )
        setFilteredStations(filtered)
      } catch (err) {
        console.error('Invalid regular expression:', err)
      }
    } else {
      setFilteredStations(user?.likedStations)
    }
  }, [searchTerm, user?.likedStations])

  async function getUser() {
    try {
      const userToSave = await userService.getLoggedinUser()
      if (!userToSave) navigate('/auth/login')
      // const userToSave = await userService.getById(user._id)
      dispatch({ type: SET_USER, user: userToSave })
      socketService.login({ id: userToSave._id, fullname: userToSave.fullname })
    } catch (err) {
      navigate('/auth/login')
    }
  }

  function handleResize() {
    if (window.innerWidth < 1100) {
      setIsCollapsed(true)
      setIsBelowThreshold(true)
    } else {
      setIsBelowThreshold(false)
    }
    if (window.innerWidth < 480) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  async function moveStation(fromIndex, toIndex) {
    try {
      const updatedStations = [...user?.likedStations]
      if (fromIndex === toIndex) return
      const [movedStation] = updatedStations.splice(fromIndex, 1)
      updatedStations.splice(toIndex, 0, movedStation)
      dispatch({
        type: SET_USER,
        user: { ...user, likedStations: updatedStations },
      })
      await updateUser({ ...user, likedStations: updatedStations })
    } catch (err) {
      console.log('Cannot move station', err)
      // showErrorMsg('Failed to move Station')
    }
  }
  function onSearch(value) {
    setSearchTerm(value) // Update search term state
  }

  return (
    <aside
      className={`menu-sidebar flex flex-column ${isCollapsed ? 'collapsed' : ''
        }`}
    >
      <div className="library-menu flex flex-column">
        <div className="library-icon flex flex-column">
          <LibraryMenu
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            selected={selected}
            setSelected={setSelected}
            isBelowThreshold={isBelowThreshold}
          />

        </div>
        <div className='station-list'>
          <div className={`search-bar-container ${isCollapsed ? 'hidden' : ''}`}>
            <SearchBar
              searchType={'station'}
              placeholder={'Search in Playlists'}
              onSearch={onSearch} // Pass the onSearch function
            />
          </div>
        </div>
        <StationPreview station={user?.likedSongsStation} type="station-preview" isCollapsed={isCollapsed} />
        <StationList
          isCollapsed={isCollapsed}
          stations={filteredStations}
          type="station-preview"
          moveStation={moveStation}
        />
      </div>
    </aside>
  )
}