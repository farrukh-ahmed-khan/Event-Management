import React from 'react';
import '../AllMails/allmails.css';

const AllMails = (props) => {
  return (
    <>
      <div className="UserDiv">
        <div className="UserDiv cursor-pointer d-flex flex-row justify-content-between align-items-center py-1 px-4 border-top border-bottom">
          <div className="UserDes">
            <span className="UserImg">
              <img
                src={require('../../Assets/images/emailpage/EmailUser.png')}
                alt=""
              />
            </span>
            <span>
              <span style={{display:"flex", flexDirection:"column" ,marginLeft:"6vh",marginTop:"-5vh"}}>
                <div className="UserName">{props.name}</div>
                <div className='desc'>{props.message.slice(0, 25) + "..."}</div>
              </span>
            </span>
          </div>
          <span className="MailCount">{props.messagecount}</span>
        </div>
      </div>
    </>
  );
};

export default AllMails;
