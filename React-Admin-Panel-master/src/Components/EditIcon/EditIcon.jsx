import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Collapse } from 'react-bootstrap';
import '../EditIcon/editicon.css';

const Editicon = () => {
  const [openStatus, setOpenStatus] = useState(false);
  return (
    <div className="cellAction">
      <div
        aria-controls="status-collapse"
        aria-expanded={openStatus}
        onClick={() => setOpenStatus(!openStatus)}
        className="UserDiv cursor-pointer d-flex flex-row justify-content-between align-items-center py-1 px-4 border-top border-bottom"
      >
        <div className="veiwButton">
          <EditIcon />
        </div>
      </div>
      <Collapse in={openStatus}>
        <div id="status-collapse" className="Statuses">
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className="square"></div>
            <p>Approved</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className="square"></div>
            <p>Pending</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className="square"></div>
            <p>Reject</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Editicon;
