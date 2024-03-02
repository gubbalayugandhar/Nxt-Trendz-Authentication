// Write your JS code here
import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    show: false,
    err: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
  onsubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }
  onsubmitFailure = err => {
    this.setState({show: true, err})
  }

  SumbitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const user = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      methed: 'POST',
      body: JSON.Stringify(user),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onsubmitSuccess()
    } else {
      this.onsubmitFailure(data.error_msg)
    }
  }
  render() {
    const {show, err} = this.state
    return (
      <div className="mainformcontainer">
        <img
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="formcontainer" onSubmit={this.SumbitForm}>
          <img
            className="image2"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="inputcontainer">
            <label className="labelinput" htmlfor="usernameid">
              USERNAME
            </label>
            <input
              id="usernameid"
              type="text"
              placeholder="Username"
              className="userinput"
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="inputcontainer">
            <label className="labelinput" htmlfor="passwordid">
              PASSWORD
            </label>
            <input
              type="password"
              id="passwordid"
              placeholder="Password"
              className="userinput"
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="loginbtn">
            Login
          </button>
          {show && <p>*{err}</p>}
        </form>
      </div>
    )
  }
}
export default Login
