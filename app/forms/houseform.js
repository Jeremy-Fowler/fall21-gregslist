export function getHouseFormTemplate() {
    return /*html*/`
    <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
    id="house-form">
    <div class="form-group">
        <label for="bedrooms" class="">Bedrooms:</label>
        <input type="number" class="form-control" name="bedrooms" id="bedrooms" required>
    </div>
    <div class="form-group">
        <label for="bathrooms" class="">Bathrooms:</label>
        <input type="number" class="form-control" name="bathrooms" id="bathrooms" required>
    </div>
    <div class="form-group">
        <label for="levels" class="">Levels:</label>
        <input type="number" class="form-control" name="levels" id="levels" required>
    </div>
    <div class="form-group">
        <label for="imgURL" class="">img:</label>
        <input type="url" class="form-control" name="imgURL" id="imgURL" required>
    </div>
    <div class="form-group">
        <label for="year" class="">Year:</label>
        <input type="number" class="form-control" name="year" id="year" required>
    </div>
    <div class="form-group">
        <label for="price" class="">Price:</label>
        <input type="number" class="form-control" name="price" id="price" min="0" max="9999999" required>
    </div>
    <div class="form-group">
        <label for="description" class="">Description:</label>
        <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
    </div>
    <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
  </form>
    `
  }