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
            <label>Address</label>
            <input type="password" className="form-control" placeholder="Address"/>
        </div>
        <div className="form-group">
            <button className="btn btn-primary" onClick={this.nextStep}>Save &amp; Continue</button>
        </div>
      </form>
      </div>
    )
  }
}
