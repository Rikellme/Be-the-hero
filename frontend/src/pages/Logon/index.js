import React, { useState } from 'react';
/**
 * Link: Componente usado para fazer a troca de rota sem recarregar a página por completo
 * useHistory: Componente usado para redirecionar para outra rota(pagina) sem que a página recarregue por completo
 */
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';


import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id })
        
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
        
            //Comando usado para levar a outra rota
            history.push('/profile');
        } catch {
            alert('Falha no Login, tente novamente');
        }
    }

    return (
       <div className="logon-container">
           <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                     placeholder="Sua ID"
                     value={id}
                     onChange={e => setId(e.target.value)}
                     />
                    <button className="button" type="submit">Entrar</button>
                
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/> 
                        Não tenho cadastro
                    </Link>
                </form>
           </section>

           <img src={heroesImg} alt="Heroes" />
       </div>
    );
}