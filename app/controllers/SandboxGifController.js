import { sandboxGifService } from "../services/SandboxGifService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxGifController {
  constructor() {
    console.log('this is the sandbox controller');

  }

  async openGift(gifId) {
    try {
      await sandboxGifService.openGift(gifId)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}