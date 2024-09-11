import { httpService } from '../http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
  login,
  logout,
  signup,
  getUsers,
  getById,
  remove,
  update,
  getLoggedinUser,
  saveLoggedinUser,
}



function getUsers() {
  return httpService.get(`user`)
}

async function getById(userId) {
  const user = await httpService.get(`user/${userId}`)
  return user
}

function remove(userId) {
  return httpService.delete(`user/${userId}`)
}

async function update(user) {
  console.log('user:', user)
  const savedUser = await httpService.put(`user/${user._id}`, user)

  // When admin updates other user's details, do not update loggedinUser
  // const loggedinUser = getLoggedinUser()
  // Might not work because its defined in the main service???
  // if (loggedinUser._id === user._id) saveLoggedinUser(user)

  return savedUser
}

async function login(userCred) {
  console.log('userCred:', userCred)
  const user = await httpService.post('auth/login', userCred)
  console.log('user:', user)
  if (user) return saveLoggedinUser(user)
}

async function signup(userCred) {
  if (!userCred.imgUrl)
    userCred.imgUrl =
      'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
  userCred.score = 10000

  const user = await httpService.post('auth/signup', userCred)
  return saveLoggedinUser(user)
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  return await httpService.post('auth/logout')
}

async function getLoggedinUser() {
	try {
		const user = await JSON.parse(
			sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
		)
		return user
	} catch (err) {
		throw err
	}
}

function saveLoggedinUser(user) {
  user = {
    _id: user._id,
    fullname: user.fullname,
    username: user.username,
    imgUrl: user.imgUrl,
    likedStations: user.likedStations,
    likedSongsStation: user.likedSongsStation,
    isAdmin: user.isAdmin,
  }
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))

  return user
}
