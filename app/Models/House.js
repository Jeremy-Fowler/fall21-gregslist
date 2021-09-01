import { generateId } from "../Utils/generateId.js";

export class House{
    constructor(houseData){
        this.id = houseData.id || generateId()
        this.state = houseData.state
        this.squareFoot = houseData.squareFoot
        this.description = houseData.description
        this.price = houseData.price
        this.img = houseData.img
    }

    get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
          <div class="card">
            <img src="${this.img}" alt="listing image" class="rounded">
            <div class="card-body">
              <h5 class="d-flex justify-content-between">
                <span >State: ${this.state} - Sq Ft: ${this.squareFoot}</span>
                <span>$ ${this.price}</span>
              </h5>
              <p>${this.description}</p>
            </div>
          </div>
        </div>
        `
    }
}