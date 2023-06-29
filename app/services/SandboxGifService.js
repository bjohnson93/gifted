import { AppState } from "../AppState.js";
import { Gif } from "../models/Gif.js";
import { api } from "./AxiosService.js";


class SandboxGifService {

  async openGift(gifId) {
    // console.log(gifId, 'here is the gifId?');
    // look through the gifts array to find the gif.id that matches gifId
    const foundGifIndex = AppState.gif.findIndex(gif => gif.id == gifId)

    // save that to foundGif

    const foundGif = AppState.gif[foundGifIndex]
    // foundGif.opened = !foundGif.opened

    if (!foundGif) {
      throw new Error('INVALID ID')
    }

    const gifData = { opened: !foundGif.opened }

    const res = await api.put(`api/gifts/${gifId}`, gifData)

    console.log('edited gif?', res.data);

    const openedGif = new Gif(res.data)

    AppState.gif.splice(foundGifIndex, 1, openedGif)

    AppState.emit('gif')
  }
}

export const sandboxGifService = new SandboxGifService()