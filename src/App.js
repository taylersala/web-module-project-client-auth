import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
            <h2>Friends Database</h2>
            <Link className= "link" to="login">Login</Link>
            <Link className= "link" to="friends">Friends List</Link>
            <Link className= "link" to="friends/add">Add Friends</Link>
            <Link className= "link" to="logout">Logout</Link>
        </header>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/friends" element={<FriendsList/>}/>
        <Route exact path="/friends/add" element={<AddFriend/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
