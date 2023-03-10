import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {userid: '', pin: ''}

  submitForm = async event => {
    event.preventDefault()
    const {userid, pin} = this.state
    const userDetails = {userid, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
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
              <label htmlFor="user">User Id</label>
              <input
                type="text"
                id="user"
                onChange={this.getUserId}
                value={userid}
                placeholder="Enter userid"
              />
              <label htmlFor="password">PIN</label>
              <input
                id="password"
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
