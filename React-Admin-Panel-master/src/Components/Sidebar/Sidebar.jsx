import './sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <HomeIcon
                className="icon"
              />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: 'none' }}>
            <li>
              <ProductionQuantityLimitsIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <AccountCircleIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/emails" style={{ textDecoration: 'none' }}>
            <li>
              <EmailIcon className="icon" />
              <span>Email</span>
            </li>
          </Link>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
