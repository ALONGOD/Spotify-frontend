export const SET_STATIONS = 'SET_STATIONS'
export const ADD_STATION = 'ADD_STATION'
export const UPDATE_STATION = 'UPDATE_STATION'
export const REMOVE_STATION = 'REMOVE_STATION'
export const ADD_SONG_TO_STATION = 'ADD_SONG_TO_STATION'
export const ADD_STATION_MSG = 'ADD_STATION_MSG'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_MODAL = 'SET_MODAL'

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
export const SET_STATION_DETAILS = 'SET_STATION_DETAILS'
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'

const initialState = {
  stations: [],
  searchTerm: '', // Add searchTerm to the initial state
  currSong: null,
  // player: { status: 'paused', volume: 0.5, progress: 0 },
  modalSong: {},
  searchResults: [],
  sortBy: 'recents',
}

export function stationReducer(state = initialState, action) {
  var newState = state
  var stations

  switch (action.type) {
    case SET_STATIONS:
      newState = { ...state, stations: action.stations }
      break
    case SET_SEARCH_TERM:  // Add this case
      newState = { ...state, searchTerm: action.searchTerm }
      break
    case SET_SORT_BY: // Handle sorting criteria
      newState = { ...state, sortBy: action.sortBy };
      break;
    case REMOVE_STATION:
      stations = state.stations.filter(
        station => station._id !== action.stationId
      )
      newState = { ...state, stations }
      break
    case SET_SEARCH_RESULTS:
      newState = { ...state, searchResults: action.results }
      break

    case ADD_STATION:
      newState = { ...state, stations: [...state.stations, action.station] }
      break
    case UPDATE_STATION:
      stations = state.stations.map(station => {
        return station._id === action.updatedStation._id ? action.updatedStation : station
      }
      )
      newState = { ...state, stations }
      break
    case SET_MODAL:
      newState = { ...state, modalSong: action.song }
      break
    case SET_CURRENT_SONG:
      // console.log(action.songToPlay)
      newState = { ...state, currSong: action.songToPlay }
      break
    default:
      return newState
  }
  return newState
}

function unitTestReducer() {
  var state = initialState
  const station1 = {
    _id: 'b101',
    vendor: 'Station ' + parseInt(Math.random() * 10),
    msgs: [],
  }
  const station2 = {
    _id: 'b102',
    vendor: 'Station ' + parseInt(Math.random() * 10),
    msgs: [],
  }

  state = stationReducer(state, { type: SET_STATIONS, stations: [station1] })
  console.log('After SET_STATIONS:', state)

  state = stationReducer(state, { type: ADD_STATION, station: station2 })
  console.log('After ADD_STATION:', state)

  state = stationReducer(state, {
    type: UPDATE_STATION,
    station: { ...station2, vendor: 'Good' },
  })
  console.log('After UPDATE_STATION:', state)

  state = stationReducer(state, {
    type: REMOVE_STATION,
    stationId: station2._id,
  })
  console.log('After REMOVE_STATION:', state)

  const msg = { id: 'm' + parseInt(Math.random() * 100), txt: 'Some msg' }
  state = stationReducer(state, {
    type: ADD_STATION_MSG,
    stationId: station1._id,
    msg,
  })
  console.log('After ADD_STATION_MSG:', state)

  state = stationReducer(state, {
    type: REMOVE_STATION,
    stationId: station1._id,
  })
  console.log('After REMOVE_STATION:', state)
}
