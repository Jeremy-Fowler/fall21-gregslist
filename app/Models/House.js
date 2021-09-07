import { generateId } from "../Utils/generateId.js";

export class House{
    constructor(houseData){
        this.id = houseData.id
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.levels = houseData.levels
        this.imgUrl = houseData.imgUrl
        this.year = houseData.year
        this.price = houseData.price
        this.description = houseData.description
    }

    get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
          <div class="card">
            <img src="${this.imgUrl}" alt="listing image" class="rounded">
            <div class="card-body">
              <h5 class="d-flex justify-content-between">
                <span >${this.bedrooms} Bedroom ${this.bathrooms} Bath</span>
                <span>$ ${this.price}</span>
              </h5>
              <p>${this.description}</p>
            </div>
          </div>
        </div>
        `
    }
}