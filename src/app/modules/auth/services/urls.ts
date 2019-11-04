import { environment } from 'src/environments/environment'

const serverAddress = environment.apiUrl;

export const AuthUrls = {
  register: serverAddress.concat('/user'),
  login: serverAddress.concat('/user/login'),
  info: serverAddress.concat('/user/info')
}
