export class Gif {
  constructor(data) {
    this.id = data._id
    this.tag = data.tag
    this.url = data.url || 'https://media2.giphy.com/media/Zy4B8AIFB4YGk/giphy-downsized.gif?cid=9757a755kqvfxue997a6cfphipa6f9pyft6cheqvxmvn8ccw&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g'
    this.opened = data.opened
    this.creatorId = data.creatorId
    this.updatedAt = data.updatedAt
  }
  get GifTemplate() {
    return `
              <div class="col-4">
                <div class="card mb-3" style="width: 14rem;">
                  <img onclick="app.SandboxGifController.openGift('${this.id}')" class="card-img-top selectable" src="${this.url}" alt="${this.tag}">
                  <div class="card-body">
                    <h5 class="card-title">${this.tag}</h5>
                  </div>
                </div>
              </div>
`
  }
}



// let gif = {
//   "_id": "649dd16d20ddc6d890106c01",
//   "tag": "Jeremy is so cute 😉",
//   "url": "",
//   "opened": false,
//   "creatorId": "649b15df024908ebc1ffe602",
//   "createdAt": "2023-06-29T18:46:05.447Z",
//   "updatedAt": "2023-06-29T18:46:05.447Z",
//   "__v": 0,
//   "id": "649dd16d20ddc6d890106c01"
// }