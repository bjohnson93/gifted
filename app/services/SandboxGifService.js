import { api } from "./AxiosService.js";


class SandboxGifService {

  async openGift(gifId) {
    // console.log(gifId, 'here is the gifId?');
    // look through the gifs array to find the gif.id that matches gifId
    // save that to foundGif
    // foundGif.opened = !foundGif.opened

    const res = await api.put(`api/gifts/${gifId}`, foundGif)

    console.log('edited gif?', res.data);
  }
}

export const sandboxGifService = new SandboxGifService()