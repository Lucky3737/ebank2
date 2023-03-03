import {Component} from 'react'

import './index.css'

const jwtToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjE0MjQyMCIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjM0MDk4NzYyfQ.ZUCC2J2zBjRhLVa1EI_4EnkZ-M-7hoVZoZFAu8GTmEQ'

class LoginForm extends Component {
  state = {userid: '', pin: ''}

  submitForm = async event => {
    event.preventDefault()
    const {userid, pin} = this.state
    const userDetails = {userid, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      body: JSON.stringify(userDetails),
      method: 'POST',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  getUserId = event => {
    this.setState({userid: event.target.value})
  }

  getPin = event => {
    this.setState({pin: event.target.value})
  }

  render() {
    const {userid, pin} = this.state
    return (
      <div className="app">
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt=" website login"
            className="img"
          />
          <div>
            <form className="form" onSubmit={this.submitForm}>
              <h1>WelCome Back!</h1>
              <label htmlFor="userid">User Id</label>
              <input
                type="text"
                id="userid"
                onChange={this.getUserId}
                value={userid}
                placeholder="Enter userid"
              />

              <label htmlFor="pin">PIN</label>

              <input
                id="pin"
                type="password"
                onChange={this.getPin}
                value={pin}
                placeholder="Enter Pin"
              />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
