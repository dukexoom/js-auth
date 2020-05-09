import { Config, Dictionary } from '@dukefun/js-ext'

const signIn = ({ getTwitterAuthUrl }: Dictionary<any>): void => {
  return getTwitterAuthUrl({ callbackUrl: `${window.location.origin}${Config.get(['jsAuth', 'twitterCallbackPath'])}` })
}

export default signIn
