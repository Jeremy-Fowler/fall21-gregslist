import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

// @ts-ignore
const api = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/houses"
})
class HousesService {
    async getHouses() {
        let res = await api.get()
        console.log('house', res)
        ProxyState.houses = res.data.map(h => new House(h))
        console.log('we habe houses?', ProxyState.houses)
    }
    async addHouse (houseData){
        let res = await api.post('', houseData)
        console.log('addHouse?', res)
        ProxyState.houses = [...ProxyState.houses, new House(res.data)]
    }
}

export const housesService = new HousesService()