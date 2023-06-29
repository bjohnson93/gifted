import { Value } from './models/Value.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {
  page = ''
  user = null
  // @ts-ignore
  /** @type {import('./models/Account.js').Account | null} */
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []

  /** @type {import('./models/Gif.js').Gif[]} */
  gif = []
  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})