import { useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Modal } from './Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { LikeSongBtn } from './LikeSongBtn'
import { EqualizerBar } from './EqualizerBar'
import { PlayPauseBtn } from './PlayPauseBtn'
import {
  SET_PLAYER_CURRENT_SONG,
  SET_PLAYER_CURRENT_STATION,
  SET_PLAYER_IS_PLAYING,
} from '../store/reducers/station.reducer'
import { useDrag } from 'react-dnd'
import { toggleModal } from '../store/actions/station.actions'
import { getTimeOfSent } from '../services/util.service'
import { useDrop } from 'react-dnd'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { spotifyAPIService } from '../services/spotifyAPI/spotifyAPI.service'
import { useNavigate } from 'react-router'
import { SET_DRAG_ACTIVE_DONE, SET_DRAG_ACTIVE_START } from '../store/reducers/system.reducer'
export function SongPreview({
  song,
  idx,
  station,
  songModal,
  type,
  likedSongs,
  onSetSongsInQueue,
  moveSong,
  isMobile,
}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [onSongHover, setOnSongHover] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { duration, imgUrl, title, artist, album } = song
  const player = useSelector((state) => state.stationModule.player)
  const { currSong, isPlaying } = player

  const isListTable = type === 'list-table'
  const isArtistPage = type === 'artist-page'
  const isSongLiked = likedSongs?.some((likedSong) => likedSong.id === song.id)
  const displayLikeBtn = onSongHover || isSongLiked
  const [isHovered, setIsHovered] = useState(false)

  const isCurrSong = currSong?.id === song?.id

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'song',
    item: { song, type, index: idx },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: () => dispatch({type: SET_DRAG_ACTIVE_DONE})
  }))
  if (isDragging) dispatch({type:SET_DRAG_ACTIVE_START})

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'song',
    hover: (item, monitor) => {
    },
    drop: (item) => {
      const dragIndex = item.index
      const hoverIndex = idx

      moveSong(dragIndex, hoverIndex, item.song, item.type)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  // useEffect(() => {
  //   if (!isOver) {
  //     setIsHovered(false)
  //   }
  // }, [isOver])

  function handleMouseLeave() {
    setOnSongHover(false)
  }

  function onPlaySongMobile(song) {
    if (isMobile) playSong(song)
  }

  async function playSong(song) {
    if (onSetSongsInQueue) await onSetSongsInQueue()
    if (station)
      dispatch({
        type: SET_PLAYER_CURRENT_STATION,
        currStation: { id: station._id, name: station.name },
      })
    if (currSong?.id !== song?.id) {
      dispatch({ type: SET_PLAYER_CURRENT_SONG, currSong: song })
    }
    dispatch({ type: SET_PLAYER_IS_PLAYING, isPlaying: true })
  }

  function onToggleModal(event, song) {
    event.stopPropagation()
    toggleModal(song)
  }

  function onLocalToggleModal(event, song) {
    event.stopPropagation()
    onToggleModal(event, song)
    setIsModalOpen(!isModalOpen)
  }

  async function navigateToArtist(name) {
    const res = await spotifyAPIService.searchDetails(name, 'artist')
    const artist = res.artists.items[0]
    navigate(`/artist/${artist.id}`)
  }

  return (
    <li
      ref={(node) => drag(drop(node))}
      className={` ${currSong?.id === song?.id ? 'active' : ''}
      ${isOver ? 'dragged' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onMouseEnter={() => setOnSongHover(true)}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={() => playSong(song)}
      onTouchStart={() => onPlaySongMobile(song)}
    >
      {(isListTable || isArtistPage) && (
        <h4 className="idx relative">
          {!onSongHover &&
            (isPlaying && isCurrSong ? <EqualizerBar /> : idx + 1)}
          {onSongHover && (
            <PlayPauseBtn
              song={song}
              station={station}
              onSetSongsInQueue={onSetSongsInQueue}
            />
          )}
        </h4>
      )}
      <div className="main-details flex flex-row align-center">
        <div className="relative img-svg play-btn-img">
          <img src={imgUrl} alt="song-img" />
          {!isListTable && onSongHover && (
            <PlayPauseBtn
              song={song}
              station={station}
              onSetSongsInQueue={onSetSongsInQueue}
              className="play-btn"
            />
          )}
        </div>
        <div className="song-details flex flex-column">
          <h4 className="title">{title}</h4>
          <h4 className="artist" onClick={() => navigateToArtist(artist)}>
            {artist ? artist : 'Artist'}
          </h4>
        </div>
      </div>
      {isListTable && (
        <>
          <h4 className="album">{album ? album : 'Album'}</h4>
          <h4 className="date">{getTimeOfSent(song?.addedAt)}</h4>
        </>
      )}
      {displayLikeBtn && <LikeSongBtn song={song} isSongLiked={isSongLiked} />}
      <div className="duration img-svg relative flex justify-start align-center">
        {isMobile ? (
          <HiOutlineDotsVertical
            onClick={(ev) => onLocalToggleModal(ev, song)}
            className="dots"
          />
        ) : (
          <>
            <h4>{duration ? duration : '3:30'}</h4>
            {onSongHover && !isMobile && (
              <BsThreeDots
                className="dots"
                onClick={(ev) => onLocalToggleModal(ev, song)} // Use local state toggle
              />
            )}
          </>
        )}
        {isModalOpen &&
          songModal?.id === song?.id && ( // Check both local and global state
            <Modal modalType={'songOptions'} />
          )}
      </div>
    </li>
  )
}
