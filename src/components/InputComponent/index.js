import {Component} from 'react'
import './index.css'
import PasswordItems from '../PasswordItems'

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
              <div className="innerContainer">
                <p className="heading">Add New Password</p>
                <div className="inputELandLogoContainer">
                  <img
                    className="inputLogo"
                    alt="website"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  />
                  <input
                    className="websiteInput"
                    placeholder="Enter Website"
                    type="text"
                  />
                </div>
                <div className="inputELandLogoContainer">
                  <img
                    className="inputLogo"
                    alt="username"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  />
                  <input
                    type="text"
                    className="websiteInput"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="inputELandLogoContainer">
                  <img
                    className="inputLogo"
                    alt="password"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  />
                  <input
                    type="password"
                    className="websiteInput"
                    placeholder="Enter Password"
                  />
                </div>
                <button className="buttonCss" type="submit">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="detailsContainer">
            <div className="countandInputContainer">
              <div className="countContainer">
                <p className="passwordsText">Your Passwords</p>
                <p className="count">1</p>
              </div>
              <div className="searchContainer">
                <img
                  className="searchImgcss"
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
                <input
                  className="inputSearch"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
            <hr className="linecss" />
            <div className="belowContainer">
              <div className="showPasswordsContainer">
                <input id="showpass" type="checkbox" />
                <label htmlFor="showpass" className="checkText">
                  Show Passwords
                </label>
              </div>
              <ul className="passwordItemsContainer">
                <PasswordItems
                  website="www.akhil.com"
                  name="akhil"
                  password="qwerty"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default InputComponent
