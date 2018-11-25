
const serverAddress = 'http://localhost:3000'

export const AuthUrls = {
  register: serverAddress.concat('/user'),
  login: serverAddress.concat('/user/login')
}
