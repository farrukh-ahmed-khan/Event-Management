import Home from './Pages/Home/Home';
import List from './Pages/List/List';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import BasicButtonExample from './Pages/Users/Users';
import UserEmail from './Pages/UserEmail/UserEmail';
import AllMails from './Components/AllMails/AllMails';
import Emails from './Pages/Emails/Emails';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EditIcon from './Components/EditIcon/EditIcon';


function App() {
  return (
    // <Footer/>
    // <Email />
    // <AllMails/>
    // <EditIcon/>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}></Route>
          <Route path="orders">
            <Route index element={<List />}></Route>
          </Route>
          <Route path="users">
            <Route index element={<BasicButtonExample />}></Route>
            <Route path="email" element={<UserEmail />}></Route>
          </Route>
          <Route path="emails">
            <Route index element={<Emails />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
