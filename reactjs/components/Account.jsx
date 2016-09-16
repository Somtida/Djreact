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
        <h2>Account Details</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm Password"/>
        </div>
        <div className="form-group">
            <button className="btn btn-primary" onClick={this.nextStep}>Save &amp; Continue</button>
        </div>
      </form>
      </div>
    )
  }
}
