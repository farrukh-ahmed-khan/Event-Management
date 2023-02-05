import Chart from '../../Components/Chart/Chart';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Widget from '../../Components/Widgets/Widget';
import HomeIcon from '@mui/icons-material/Home';
import './home.css';
import Barchart from '../../Components/BarChart/BarChart';
import Linechart from '../../Components/LineChart/LineChart';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
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
            className="homeHeading"
            style={{ padding: '2vh', display: 'flex' }}
          >
            <div>
              <HomeIcon style={{ fontSize: '32px' }} />
            </div>
            <div style={{ marginTop: '.3vh', paddingLeft: '.9vh' }}>
              <span className="heading">Home</span>
            </div>
          </div>
          <div className="widgets">
            <Widget type="revenue" />
            <Widget type="user" />
            <Widget type="order" />
          </div>
          <div className="charts">
            <Linechart />
            <Barchart /> 
             <Chart />
          </div>
          <div className='foot'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
