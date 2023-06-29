import { AppState } from "../AppState.js"
import { Gif } from "../models/Gif.js"
import { api } from "./AxiosService.js"

class GifsService {
  async getGifs() {
    const res = await api.get('/api/gifts')
    // console.log('gifts', res.data)
    const newgif = res.data.map(gifPojo => new Gif(gifPojo))
    AppState.gif = newgif
  }

  async postGif(formData) {
    const res = await api.post('api/gifts', formData)
    // console.log('posted gif', res.data)

    const newGif = new Gif(res.data)
    AppState.gif.push(newGif)
    AppState.emit('gif')
  }
}



export const gifsService = new GifsService()
