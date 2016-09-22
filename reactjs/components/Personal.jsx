import React from "react"

export default class Personal extends React.Component {
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
          <label>First Name</label>
          <input type="text" className="form-control" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="password" className="form-control" placeholder="Last Name"/>
        </div>
        <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" className="form-control" placeholder="MM/DD/YYYY"/>
        </div>
        <div className="form-group">
            <label>Phone Number</label>
            <input type="text" className="form-control" placeholder="xxx-xxx-xxxx"/>
        </div>
        <div className="form-group">
            <label>Gender</label>
              <select value="F">
                <option value="F">Female</option>
                <option value="M">Male</option>
                <option value="X">unspecified</option>
              </select>
        </div>
        <div className="form-group">
            <label>Address</label>
            <textarea name="address" className="form-control" placeholder="Address"/>
        </div>
        <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control" placeholder="City"/>
        </div>
        <div className="form-group">
            <label>State</label>
            <input type="text" className="form-control" placeholder="State"/>
        </div>
        <div className="form-group">
            <label>Zipcode</label>
            <input type="text" className="form-control" placeholder="Zipcode"/>
        </div>
        <div className="form-group">
            <button className="btn btn-primary" onClick={this.nextStep}>Save &amp; Continue</button>
        </div>
      </form>
      </div>
    )
  }
}
