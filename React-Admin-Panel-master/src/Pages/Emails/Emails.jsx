import React from 'react';
import AllMails from '../../Components/AllMails/AllMails';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import EmailIcon from '@mui/icons-material/Email';
import '../Emails/emails.css';
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
    messagecount: 4,
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
    messagecount: 4,
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
    messagecount: 4,
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
    messagecount: 4,
  },
];
const Emails = () => {
  return (
    <div className="Emails">
      <Navbar />
      <div className="EmailsContainer">
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
            className="EmailsHeading"
            style={{ padding: '2vh', display: 'flex' }}
          >
            <div>
              <EmailIcon style={{ fontSize: '32px' }} />
            </div>
            <div style={{ marginTop: '.3vh', paddingLeft: '.9vh' }}>
              <span className="heading">Emails</span>
            </div>
          </div>
          {data.map((item, index) => {
            return (
              <AllMails
                key={index}
                id={index}
                name={item.username}
                img={item.img}
                message={item.message}
                messagecount={item.messagecount}
              />
            );
          })}
          <div className="EmailsFoot">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emails;
