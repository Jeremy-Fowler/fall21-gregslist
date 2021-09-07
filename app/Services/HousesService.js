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
    addHouse (houseData){
        console.log('add house function')
        var testHouse = new House(houseData)
        ProxyState.houses = [...ProxyState.houses, testHouse]
    }
}

export const housesService = new HousesService()