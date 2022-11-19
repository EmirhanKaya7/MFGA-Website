import './App.css';
import { Login } from './Pages/Login/login';
import { Register } from './Pages/Register/register';
import { Edit_Delete } from "./Pages/Profile/edit-delete";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from './components/Navbar/navbar';
import Homepage from './Pages/Homepage/homepage';
import Sidebar from './components/Sidebar/sidebar';
import NavSide from './Pages/Nav-Side';
import CurrentStats from './Pages/CurrentStats/currentStats';

function App() {
  return (
    <Router>
      <NavSide />
      <Routes>
        <Route path="/">
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Homepage />} />
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<Login/>} />
          <Route path="edit" element={<Edit_Delete/>} />
          <Route path="currentstats" element={<CurrentStats/>}/>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
