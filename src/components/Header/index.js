// Write your JS code here
import './index.css'

const Header = props => (
  <nav className="navcontainer">
    <img
      className="imagelogo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <div className="elements">
      <ul className="detalis">
        <li className="lielement">Home</li>
        <li className="lielement">Product</li>
        <li className="lielement">Cart</li>
      </ul>
      <button className="logoutbtn">Logout</button>
    </div>
  </nav>
)
export default Header
