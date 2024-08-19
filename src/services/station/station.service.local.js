import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'
import {
  stations as demoStations,
  user as demoUser,
} from '../../../demo_data/station.js'

const STORAGE_KEY = 'station'

export const stationService = {
  query,
  getById,
  save,
  remove,
  addStationMsg,
  initializeDemoData, // Add this method
}

window.cs = stationService

initializeDemoData() // Call this function on initialization

export async function initializeDemoData() {

  let stations = await storageService.query(STORAGE_KEY)
  console.table(stations)
  if (!stations || !stations.length) {
    stations = demoStations
    await localStorage.setItem(STORAGE_KEY, JSON.stringify(stations))
    console.log('Demo stations initialized in local storage.')
  }
}

async function query(filterBy = { txt: '' }) {
  var stations = await storageService.query(STORAGE_KEY)
  const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

  if (txt) {
    const regex = new RegExp(filterBy.txt, 'i')
    stations = stations.filter(station => regex.test(station.vendor))

    stations = stations.map(({ _id, vendor, price, speed, owner }) => ({
      _id,
      vendor,
      price,
      speed,
      owner,
    }))
    return stations
  }
}

function getById(stationId) {
  return storageService.get(STORAGE_KEY, stationId)
}

async function remove(stationId) {
  await storageService.remove(STORAGE_KEY, stationId)
}

async function save(station) {
  var savedStation
  if (station._id) {
    const stationToSave = {
      _id: station._id,
      price: station.price,
      speed: station.speed,
    }
    savedStation = await storageService.put(STORAGE_KEY, stationToSave)
  } else {
    const stationToSave = {
      vendor: station.vendor,
      price: station.price,
      speed: station.speed,
      owner: userService.getLoggedinUser(),
      msgs: [],
    }
    savedStation = await storageService.post(STORAGE_KEY, stationToSave)
  }
  return savedStation
}

async function addStationMsg(stationId, txt) {
  const station = await getById(stationId)
  const msg = {
    id: makeId(),
    by: userService.getLoggedinUser(),
    txt,
  }
  station.msgs.push(msg)
  await storageService.put(STORAGE_KEY, station)

  return msg
}
