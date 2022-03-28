import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import PasswordItems from '../PasswordItems'

const BGcolors = [
  'initialBg0',
  'initialBg1',
  'initialBg2',
  'initialBg3',
  'initialBg4',
  'initialBg5',
]

class InputComponent extends Component {
  state = {
    details: [],
    Website: '',
    Name: '',
    Password: '',
    hidden: true,
    SearchValue: '',
  }

  onWebsiteInput = event => {
    this.setState({Website: event.target.value})
  }

  onNameInput = event => {
    this.setState({Name: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({Password: event.target.value})
  }

  onSearching = event => {
    this.setState({
      SearchValue: event.target.value,
    })
    console.log(event.target.value)
  }

  onClickingAdd = event => {
    event.preventDefault()
    const {Name, Website, Password} = this.state
    const colorName = BGcolors[Math.ceil(Math.random() * BGcolors.length - 1)]

    const creds = {
      id: v4(),
      name: Name,
      website: Website,
      password: Password,
      colorNames: colorName,
    }
    this.setState(prevState => ({
      details: [...prevState.details, creds],
      Website: '',
      Name: '',
      Password: '',
    }))
  }

  checkingBox = () => {
    this.setState(prevState => ({hidden: !prevState.hidden}))
  }

  onDeleteClick = id => {
    const {details} = this.state
    this.setState({details: details.filter(vals => vals.id !== id)})
  }

  render() {
    const {details, Name, Website, Password, hidden, SearchValue} = this.state
    const finalList = details.filter(item =>
      item.website.toLowerCase().includes(SearchValue.toLowerCase()),
    )
    console.log(finalList)
    const totalPasswords = details.length
    const g = details.length === 0
    const noPasswordSite = (
      <ul className="passwordItemsContainer">
        <img
          alt="no passwords"
          className="noPassImg"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        />
        <p className="noText">No passwords</p>
      </ul>
    )
    const hasPassword = (
      <ul className="passwordItemsContainer">
        {finalList.map(item => (
          <PasswordItems
            id={item.id}
            key={item.id}
            website={item.website}
            name={item.name}
            password={item.password}
            hidden={hidden}
            onDeleteClick={this.onDeleteClick}
            colorNames={item.colorNames}
          />
        ))}
      </ul>
    )

    const rendering = g ? noPasswordSite : hasPassword

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
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
            <div className="inputContainer">
              <form className="innerContainer" onSubmit={this.onClickingAdd}>
                <h1 className="heading">Add New Password</h1>
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
                    onChange={this.onWebsiteInput}
                    value={Website}
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
                    onChange={this.onNameInput}
                    value={Name}
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
                    onChange={this.onPasswordInput}
                    value={Password}
                  />
                </div>
                <button className="buttonCss" type="submit">
                  Add
                </button>
              </form>
            </div>
          </div>
          <div className="detailsContainer2">
            <div className="countandInputContainer">
              <div className="countContainer">
                <h1 className="passwordsText">Your Passwords</h1>
                <p className="count">{totalPasswords}</p>
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
                  type="search"
                  onChange={this.onSearching}
                  value={SearchValue}
                />
              </div>
            </div>
            <hr className="linecss" />
            <div className="belowContainer">
              <div className="showPasswordsContainer">
                <input
                  id="showpass"
                  type="checkbox"
                  onChange={this.checkingBox}
                />
                <label htmlFor="showpass" className="checkText">
                  Show Passwords
                </label>
              </div>

              {rendering}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default InputComponent
