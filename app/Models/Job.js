import { generateId } from "../Utils/generateId.js"

export class Job{
    constructor(jobData){
        this.id = jobData.id
        this.company = jobData.company
        this.jobTitle = jobData.jobTitle
        this.hours = jobData.hours
        this.rate = jobData.rate
        this.description = jobData.description
    }

    get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
          <div class="card">
            <img src="https://www.chicagotribune.com/resizer/_71CczY9L-zD6iavqs3J5_nzEzU=/800x802/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/YHJ63MXXBZQI64WDTWBXKUFSAU.jpg" alt="listing image" class="rounded">
            <div class="card-body">
              <h5 class="d-flex justify-content-between">
                <span>Hiring: ${this.jobTitle}</span>
                
              </h5>
              <p>Rate: $${this.rate} Hours: ${this.hours}</p>
              <p>${this.description}</p>
            </div>
          </div>
        </div>
        `
    }
    
}