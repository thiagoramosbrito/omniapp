import React, {useState} from 'react';
import api from '../services/api';

import logo from '../assets/favicon.ico';


import './Login.css';

export default function Login({history}) {
    const [username,SetUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs',{
            username,
        });

        const { _id } = response.data;
        console.log(response);

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Ominapp"></img>
                <input 
                placeholder = "Digite seu usuário no git hub"
                value = {username}
                onChange = {e => SetUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            
        </div>
        
    );
}

