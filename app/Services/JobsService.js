import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";
// @ts-ignore
const api = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/jobs"
  })
class JobsService {
    async getJobs() {
        let res = await api.get()
        console.log('job', res)
        ProxyState.jobs = res.data.map(j => new Job(j))
        console.log('we habe jorbs?', ProxyState.jobs)
    }
    addJob(jobData){
    var testJob = new Job(jobData)        
    ProxyState.jobs = [...ProxyState.jobs, testJob]
    }
}

export const jobsService = new JobsService()