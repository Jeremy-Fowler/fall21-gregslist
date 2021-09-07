import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"
// @ts-ignore
const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/cars"
})
class CarsService {
  async addCar(carData) {
    let res = await api.post('', carData)
    console.log("addCar", carData)
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
  }

  async getCars(){
    let response = await api.get()
    console.log('what is the response', response);
    ProxyState.cars = response.data.map(c => new Car(c))
    console.log("do we have cars", ProxyState.cars)
  }
}

// singleton pattern
export const carsService = new CarsService()