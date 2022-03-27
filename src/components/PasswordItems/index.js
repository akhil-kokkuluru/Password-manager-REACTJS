import './index.css'

const PasswordItems = props => {
  const {website, name, pasword} = props
  const initial = name[0]
  return (
    <li className="passwordsContainer">
      <p className=>{initial.toUpperCase()}</p>
    </li>
  )
}

export default PasswordItems
