import { generateId } from "../Utils/generateId.js"

export class Job{
    constructor(jobData){
        this.id = jobData.id || generateId()
        this.jobTitle = jobData.jobTitle
        this.pay = jobData.pay
        this.description = jobData.description
        this.img = jobData.img
    }

    get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
          <div class="card">
            <img src="${this.img}" alt="listing image" class="rounded">
            <div class="card-body">
              <h5 class="d-flex justify-content-between">
                <span>Hiring: ${this.jobTitle}</span>
                <span>${this.pay} per hour</span>
              </h5>
              <p>${this.description}</p>
            </div>
          </div>
        </div>
        `
    }
    
}