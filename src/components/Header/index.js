// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="wave-icon-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-image"
      />
      <p className="wave-text">Wave</p>
    </div>
    <ul className="nav-items-container">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          {' '}
          Home{' '}
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          {' '}
          About{' '}
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          {' '}
          Contact{' '}
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
