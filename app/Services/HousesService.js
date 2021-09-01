import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {
    addHouse (houseData){
        console.log('add house function')
        var testHouse = new House(houseData)
        ProxyState.houses = [...ProxyState.houses, testHouse]
    }
}

export const housesService = new HousesService()