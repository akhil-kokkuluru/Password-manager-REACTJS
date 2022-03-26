import {Component} from 'react'
import './index.css'

class InputComponent extends Component {
  render() {
    return (
      <div className="totalContainer">
        <div className="contentContainer">
          <img
            className="logoImg"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
          <div className="detailsContainer">
            <img
              className="inputsImage"
              alt="password"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
            <div className="inputContainer">
              <p className="heading">Add New Password</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default InputComponent
