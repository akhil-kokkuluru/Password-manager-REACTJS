import './index.css'

const PasswordItems = props => {
  const {id, website, name, password, hidden, onDeleteClick} = props
  const initial = name[0]
  const BGcolors = [
    'initialBg0',
    'initialBg1',
    'initialBg2',
    'initialBg3',
    'initialBg4',
    'initialBg5',
  ]
  const ondeleteAction = () => {
    onDeleteClick(id)
  }
  const bgColor = BGcolors[Math.ceil(Math.random() * BGcolors.length - 1)]

  return (
    <li className="passwordsContainer">
      <p className={`initialCss ${bgColor}`}>{initial.toUpperCase()}</p>
      <div className="credentialsContainer">
        <p className="details website">{website}</p>
        <p className="details name">{name}</p>
        <p className="details password">
          {password}
          {/* <img
            className="starsCss"
            alt="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          /> */}
        </p>
      </div>
      <button className="delButton" onClick={ondeleteAction}>
        <img
          className="delImgCss"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordItems
