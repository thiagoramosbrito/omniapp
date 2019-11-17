import React from 'react';

import logo from '../assets/favicon.ico';


import './Login.css';

export default function Login() {
    return (
        <div className="loginContainer">
            <form>
                <img src={logo} alt="Ominapp"></img>
                <input placeholder = "Digite seu usuário no git hub"/>
                <button type="submit">Enviar</button>
            </form>
            
        </div>
        
    );
}

