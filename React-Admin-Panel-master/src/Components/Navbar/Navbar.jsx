import './navbar.css';
import logo from "../../Assets/images/nav/Logo.png"
const Navbar = () => {

  return (
    <div className="navbar">
      <div className='nav-logo'>
        <img src={logo} alt="logo" srcset="" />
      </div>
    </div>
  );
};

export default Navbar;
