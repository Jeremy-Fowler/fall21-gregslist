import { ProxyState } from "../AppState.js"
import { getHouseFormTemplate } from "../forms/houseform.js"
import { housesService } from "../Services/HousesService.js"


function _drawHouses() {
  let template = ''
  ProxyState.houses.forEach(house => template += house.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    // TODO register the listener for houses
    ProxyState.on('houses', _drawHouses)
  }
  addHouse(){
    event.preventDefault()
        /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target

    const houseData = {
      state: form.state.value,
      squareFoot: form.squareFoot.value,
      description: form.description.value,
      price: form.price.value,
      img: form.img.value,
    }

    try{
      housesService.addHouse(houseData)
    }catch(e) {
      form.make.classList.add('border-danger')
      console.error('[TODO] you were supposed to do this', e)
      return

    }

    form.reset()
  }
  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `
    // TODO build the house form
    // abstract it if you want
    document.getElementById('forms').innerHTML = getHouseFormTemplate()
    
  }

  toggleHouseForm() {
    console.log('[TODO fill me in]')
    document.getElementById('house-form').classList.toggle('visually-hidden')
  }

}