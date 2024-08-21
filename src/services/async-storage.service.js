export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  updateStation
}

function query(entityType, delay = 500) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || []
  return new Promise(resolve => setTimeout(() => resolve(entities), delay))
}

function get(entityType, entityId) {
  return query(entityType).then(entities => {
    const entity = entities.find(entity => entity._id === entityId)
    if (!entity)
      throw new Error(
        `Get failed, cannot find entity with id: ${entityId} in: ${entityType}`
      )
    return entity
  })
}

function post(entityType, newEntity) {
  if (!newEntity._id) {
    newEntity._id = _makeId()
  }
  return query(entityType).then(entities => {
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  })
}

function put(entityType, updatedEntity) {
  return query(entityType).then(entities => {
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    if (idx < 0)
      throw new Error(
        `Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`
      )
    const entityToUpdate = { ...entities[idx], ...updatedEntity }
    entities.splice(idx, 1, entityToUpdate)
    _save(entityType, entities)
    return entityToUpdate
  })
}

async function updateStation(songToAdd, stationId) {
  const stations = await query('stationDB')
  const idx = stations.findIndex(station => station._id === stationId)
  const hasId = stations[idx].songs.some(song => song.id === songToAdd.id)
  if (hasId) throw 'Song already exists in station'
  stations[idx].songs.push(songToAdd)
  _save('stationDB', stations)
  return stations[idx]
}

function remove(entityType, entityId) {
  return query(entityType).then(entities => {
    const idx = entities.findIndex(entity => entity._id === entityId)
    if (idx < 0)
      throw new Error(
        `Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`
      )
    entities.splice(idx, 1)
    _save(entityType, entities)
  })
}

// Private functions

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
