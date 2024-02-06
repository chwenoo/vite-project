import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (e) => {
        console.log("Typed value "+ e.target.value);
        setUsername(e.target.value);
    }
    const passwordHandler = (e) => {
        console.log("Typed value "+ e.target.value);
        setPassword(e.target.value);
    }

    const submitHandler = () => {
        console.log(`Username: ${username} Password: ${password}`);
    }
  return (
    <div>
        <h2>Login Form</h2>
        <label>Username</label>
        <input type="text" name='username' placeholder='username' value={username} onChange={usernameHandler} /> <br /><br />
        <label>Password</label>
        <input type="password" name='password' placeholder='password' value={password} onChange={passwordHandler} /> <br /><br />
        <button type='button' onClick={submitHandler}>Submit</button>
        <p>Login User: {username} </p>
    </div>
  )
}

export default Login