import React from "react"
import { render } from "react-dom"

import Account from './components/Account';

class App extends React.Component {
  render() {
    return (
      <div>
        <Account />
      </div>
    )
  }
}

render(<App/>, document.getElementById('App1'))
