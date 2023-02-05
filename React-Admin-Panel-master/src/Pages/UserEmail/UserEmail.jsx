import React from 'react';
import EmailForm from '../../Components/EmailForm/EmailForm';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './useremail.css';

const UserEmail = () => {
  return (
    <>
      <div className="UserEmail">
        <Navbar />
        <div className="UserEmailContainer">
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
              className="UserEmailHeading"
              style={{ padding: '2vh', display: 'flex' }}
            >
              <div>
                <AccountCircleIcon style={{ fontSize: '32px' }} />
              </div>
              <div style={{ marginTop: '.3vh', paddingLeft: '.9vh' }}>
                <span className="heading">
                  Users/<span style={{ color: '#BBBBBB' }}>Email</span>
                </span>
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <EmailForm />
            </div>
            <div className="mailfoot">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEmail;
