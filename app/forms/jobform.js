export function getJobFormTemplate(){
    return /*html*/`
    <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.jobsController.addJob()"
    id="job-form">
    <div class="form-group">
        <label for="jobTitle" class="">Job Title:</label>
        <input type="text" class="form-control" name="jobTitle" id="jobTitle" required>
    </div>
    <div class="form-group">
        <label for="pay" class="">Pay Per Hour:</label>
        <input type="number" class="form-control" name="pay" id="pay" required>
    </div>
    <div class="form-group">
        <label for="description" class="">Description:</label>
        <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
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