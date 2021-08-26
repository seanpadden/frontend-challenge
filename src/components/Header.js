import '../assets/css/Header.css'
import logo from '../assets/css/logo.svg'

const Header = () => {
  return(
    <header className="header">
      <img className="header-logo" src={logo} alt="logo" />
      <nav>
        Nav menu here
      </nav>
    </header>
  )
}

export default Header