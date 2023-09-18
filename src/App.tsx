import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layouts/Navbar';
import BasicForm from './components/BasicForm';
import UserList from './components/UserList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './Pages/Cards';
import Home from './Pages/Home';
import Users from './Pages/Users';
import UserProfile from './Pages/UserProfile';


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/basicform' element={<BasicForm/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
      </Routes>

    </>
  );
}

export default App;
