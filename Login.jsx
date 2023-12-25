import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       let em = console.log(email);
       let pa = console.log(pass);
    }
    
     return (
        <div className="auth-form-container">
            <h2>Log in</h2>
            <form className="login-form" onSubmit={handleSubmit}>
               
                <label htmlFor="email">email</label>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="youremail@gmail.com" id="email"
                name="email" />
               
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="butt" type="submit">Log In</button>
                
            </form>
            <button className="link-btn" onClick={() => props.onSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}