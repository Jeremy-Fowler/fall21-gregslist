import { generateId } from "../Utils/generateId.js"

export class Car {
  constructor(carData) {
    this.id = carData.id || generateId()
    this.make = carData.make
    this.model = carData.model
    this.imgUrl = carData.imgUrl
    this.year = carData.year
    this.price = carData.price
    this.description = carData.description
  }

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.imgUrl}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>${this.make} - ${this.model} - ${this.year}</span>
            <span>$ ${this.price}</span>
          </h5>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }


}