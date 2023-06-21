import React from 'react';
import {useState} from 'react'

const Login = () => {

    const [username, setUsername] = useState('Please Login');
    const handleSubmit = (e) => {
        e.preventDefault();
        var username = document.getElementById('username').value;
        if (username==""){
            setUsername("Pleaseeeeee Login");
        }
        else {
            setUsername(`Hi, ${username}`);
        }
        
    }

  return (
    <form onSubmit={handleSubmit} > 
        <h1>Login</h1>
        <input type="text" placeholder="Username" id="username" /><br></br>
        <input type="password" placeholder="Password" />
        <br></br>
        <button type="submit">Login</button>
        <br></br>
        <div>{username}</div>
    </form>
  )
}

export default Login