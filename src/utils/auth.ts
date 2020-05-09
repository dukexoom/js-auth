import { Cookies, Config } from '@dukefun/js-ext'

const logout = (): void => {
  Cookies.remove(Config.get(['jsAuth', 'accessTokenKey']))
  Cookies.remove(Config.get(['jsAuth', 'refreshTokenKey']))
  window.location.replace('/auth')
}

export default {
  logout,
}
