import React from "react"

export default class Account extends React.Component {
  nextStep(e) {
   e.preventDefault()
   console.log("next step");
  }
  render() {
    return (
      <div className="container">
        <form>
        <h2>Personal Details</h2>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Name"/>
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input type="text" className="form-control" placeholder="Lastname"/>
        </div>
        <div className="form-group">
          <label>DOB</label>
          <input type="date" className="form-control" placeholder="MM/DD/YYYY"/>
        </div>
        <div className="form-group">
          <label>Gender</label>
            <select class="form-control" id="exampleSelect1">
              <option>Female</option>
              <option>Male</option>
            </select>
        </div>
      </form>
      </div>
    )
  }
}
