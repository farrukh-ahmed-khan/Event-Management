// import './widget.scss';
import './widget.css';
import revenue from '../../Assets/images/widgets-icons/revenue-icon.png';
import users from '../../Assets/images/widgets-icons/user-icon.png';
import orders from '../../Assets/images/widgets-icons/order-icon.png';


import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({ type }) => {
  let data;
  // temporay
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'Users',
        isMoney: false,
        link: 'See All Users',
        icon: <img src={users}/>
      };

      break;
    case 'order':
      data = {
        title: 'Orders',
        isMoney: false,
        link: 'See All Orders',
        icon: <img src={orders}/>
      };

      break;
    case 'revenue':
      data = {
        title: 'Revenue',
        isMoney: true,
        link: 'View net earnings',
        icon: <img src={revenue} />,
      };

      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="widget-details">
        <div className="counter">
          <div style={{display:"flex"}} >
            <div>
              <span className="widget-icon">{data.icon}</span>
            </div>
            <div style={{marginTop:"8px",paddingLeft:"1vh"}}>
              <span className="widget-amount">
                {data.isMoney} {"$"+amount}
              </span>
            </div>
          </div>
        </div>
        <div className="widget-heading">
          <span className="widget-title">{data.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Widget;
