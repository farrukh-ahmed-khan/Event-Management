import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import FilterSideBar from '../../Components/MailPortion/MailPortion';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Users/users.css';

const data = [
  {
    id: 1,
    username: 'John Doe',
    img: <img src={require('../../Assets/images/email/user.png')} />,
    mailtitle: 'Email',
    mail: 'John123@gmail.com',
    messagetitle: 'Message',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. proident, sunt in culpaqui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    username: 'John Doe',
    img: <img src={require('../../Assets/images/email/user.png')} />,
    mailtitle: 'Email',
    mail: 'John123@gmail.com',
    messagetitle: 'Message',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. proident, sunt in culpaqui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    username: 'John Doe',
    img: <img src={require('../../Assets/images/email/user.png')} />,
    mailtitle: 'Email',
    mail: 'John123@gmail.com',
    messagetitle: 'Message',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. proident, sunt in culpaqui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    username: 'John Doe',
    img: <img src={require('../../Assets/images/email/user.png')} />,
    mailtitle: 'Email',
    mail: 'John123@gmail.com',
    messagetitle: 'Message',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. proident, sunt in culpaqui officia deserunt mollit anim id est laborum.',
  },
];

const Users = () => {
  return (
    <>
      <div className="list">
        <Navbar />
        <div className="listContainer">
          <div style={{ width: '306px' }}>
            <Sidebar />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              className="listHeading"
              style={{ padding: '2vh', display: 'flex' }}
            >
              <div>
                <AccountCircleIcon style={{ fontSize: '32px' }} />
              </div>
              <div style={{ marginTop: '.3vh', paddingLeft: '.9vh' }}>
                <span className="heading">Users</span>
              </div>
            </div>
            <div className='UsersSlides'>
              {data.map((item, index) => {
                return (
                  <FilterSideBar
                    key={index}
                    id={index}
                    name={item.username}
                    img={item.img}
                    mtitle={item.mailtitle}
                    mail={item.mail}
                    message={item.message}
                  />
                );
              })}
            </div>
            <div className="foot">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
