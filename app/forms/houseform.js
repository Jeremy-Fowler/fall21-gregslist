export function getHouseFormTemplate() {
    return /*html*/`
    <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
    id="house-form">
    <div class="form-group">
        <label for="state" class="">State:</label>
        <input type="text" class="form-control" name="state" id="state" required>
    </div>
    <div class="form-group">
        <label for="squareFoot" class="">Square Footage:</label>
        <input type="number" class="form-control" name="squareFoot" id="squareFoot" required>
    </div>
    <div class="form-group">
        <label for="description" class="">Description:</label>
        <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
    </div>
    <div class="form-group">
        <label for="price" class="">Price:</label>
        <input type="number" class="form-control" name="price" id="price" min="0" max="9999999">
    </div>
    <div class="form-group">
        <label for="img" class="">img:</label>
        <input type="url" class="form-control" name="img" id="img" required>
    </div>
    <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
  </form>
    `
  }