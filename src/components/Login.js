import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const { push } = useNavigate();
    const [cred, setCred] = useState({
      username: "",
      password: ""
    });

    const handleChange = (e) => {
      setCred({
        ...cred,
        [e.target.name]:e.target.value
    })
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('testing')
      axios.post('http//localhost:9000/api/login', cred)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          push('/friends');
        })
        .catch(err => {
          console.log(err)
        })
    };

    return (<div> 
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input onChange={handleChange} name="username" id="username" />
        </div>
  
  
        <div>
          <label htmlFor="password">Password:</label>
          <input onChange={handleChange} type="password" name="password" id="password" />
        </div>
        
        <div>
          <button>Submit</button>
        </div>
      
      </form>
    </div>)
  }

export default Login;