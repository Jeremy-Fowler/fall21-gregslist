import { ProxyState } from "../AppState.js"
import { getCarFormTemplate } from "../forms/carform.js"
import { carsService } from "../Services/CarsService.js"

function _drawCars() {
  let template = ''
  ProxyState.cars.forEach(car => template += car.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class CarsController {
  constructor() {
    ProxyState.on('cars', _drawCars)
    //             ^^^^ magic string must match a property on the appstate
    carsService.getCars()
  }

  async addCar() {
    debugger
    event.preventDefault() // do not forget this line on form submissions
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    // TODO get data from form

    const carData = {
      make: form.make.value,
      model: form.model.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
    }
    console.log(carData)
    try {
      await carsService.addCar(carData)
    } catch (e) {
      // TODO draw errors
      form.make.classList.add('border-danger')
      console.error('[TODO] you were supposed to do this', e)
      return
    }

    form.reset()

  }

  showCars() {
    _drawCars()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-info" onclick="app.carsController.toggleCarForm()">Add Car</button>
    `
    document.getElementById('forms').innerHTML = getCarFormTemplate()
  }


  toggleCarForm() {
    document.getElementById('car-form').classList.toggle('visually-hidden')
  }

}