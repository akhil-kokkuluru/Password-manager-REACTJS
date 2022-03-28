import './index.css'

const PasswordItems = props => {
  const {id, website, name, password, hidden, onDeleteClick, colorNames} = props
  const initial = name[0]

  const ondeleteAction = () => {
    onDeleteClick(id)
  }
  let renderDetails
  if (hidden) {
    renderDetails = (
      <img
        className="starsCss"
        alt="stars"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      />
    )
  } else {
    renderDetails = password
  }

  return (
    <li className="passwordsContainer">
      <p className={`initialCss ${colorNames}`}>{initial.toUpperCase()}</p>
      <div className="credentialsContainer">
        <p className="details website">{website}</p>
        <p className="details name">{name}</p>
        <p className="details password">{renderDetails}</p>
      </div>
      <button
        className="delButton"
        onClick={ondeleteAction}
        type="button"
        testid="delete"
      >
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
