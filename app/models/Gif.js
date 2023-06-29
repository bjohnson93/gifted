export class Gif {
  constructor(data) {
    this.id = data._id
    this.tag = data.tag
    this.url = data.url || 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1743&q=80'
    this.opened = data.opened || false
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