import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import '../MailPortion/mailportion.css';

export default function FilterSideBar(props) {
  const [openStatus, setOpenStatus] = useState(false);
  console.log(props.id);
  return (
    <div className={`MailMain ${props.id % 2 !== 0 ? 'odd' : ''}`}>
      <div className={`UserDiv ${openStatus === true ? 'active' : ''}`}>
        <div
          aria-controls="status-collapse"
          aria-expanded={openStatus}
          onClick={() => setOpenStatus(!openStatus)}
          className="UserDiv cursor-pointer d-flex flex-row justify-content-between align-items-center py-1 px-4 border-top border-bottom"
        >
          <div className="UserDes">
            <span className="UserImg">{props.img}</span>
            <span className="UserName">{props.name}</span>
          </div>
          <span>
            <img
              src={require('../../Assets/images/email/Arrow.png')}
              alt="filter-open"
            />
          </span>
        </div>
        <Collapse in={openStatus}>
          <div id="status-collapse" className="SubDiv">
            <div className="d-flex SubHeading">
              <div className="MailPortion">
                <div className="MailHeading">{props.mtitle}</div>
                <div className="UserMail">{props.mail}</div>
              </div>
              <div className="MessagePortion">
                <div className="MessageHeading">Message</div>
                <div className="UserMessage">{props.message}</div>
              </div>
              <div className="EmailBtnDiv">
                <button className="EmailBtn" >
                  <Link to="/users/email">Send Email</Link>
                </button>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
