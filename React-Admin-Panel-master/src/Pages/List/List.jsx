import React from 'react';
import Datatable from '../../Components/DataTable/DataTable';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
// import listIcon from '@mui/icons-material/list';
import './list.css';
import Footer from '../../Components/Footer/Footer';

const List = () => {
  return (
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
              <TextSnippetIcon style={{ fontSize: '32px' }} />
            </div>
            <div style={{ marginTop: '.3vh', paddingLeft: '.9vh' }}>
              <span className="heading">Orders</span>
            </div>
          </div>
          <Datatable />
          <div className="foot">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
