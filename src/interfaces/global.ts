import { Dictionary } from '@dukefun/js-ext'

declare global {
  interface Window {
    fbAsyncInit: any
    FB: Dictionary<any>
    gapi: Dictionary<any>
  }
}
