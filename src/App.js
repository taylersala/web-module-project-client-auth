import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Login} from './components/Login';
import {AddFriend} from './components/AddFriend';
import {FriendsList} from './components/FriendsList';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/friends" element={<FriendsList/>}/>
        <Route exact path="/friends/add" element={<AddFriend/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
