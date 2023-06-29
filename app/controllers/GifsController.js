import { AppState } from "../AppState.js"
import { gifsService } from "../services/GifsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawGifs() {
  const gif = AppState.gif
  let template = ''
  gif.forEach(gif => template += gif.GifTemplate)
  setHTML('gifTemplate', template)
}
export class GifsController {
  constructor() {
    // console.log('gifs controller loaded')
    this.getGifs()

    AppState.on('gif', _drawGifs)
  }

  async getGifs() {
    try {
      await gifsService.getGifs()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
  async postGif(event) {
    try {
      event.preventDefault()
      let form = event.target
      let formData = getFormData(form)
      // console.log(formData);
      await gifsService.postGif(formData)
    } catch (error) {
      console.error
      Pop.error(error.message)
    }
  }
}
