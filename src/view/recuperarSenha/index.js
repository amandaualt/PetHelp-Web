import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './recuperar.css';
import NavBar from '../../componentes/navbar';

function RecuperarSenha() {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha() {
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Um email foi enviado para sua conta');
        }).catch(erro => {
            setMsg('E-mail invalido');
        })
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="form-senha">
                <form className="text-center form-login mx-auto my-5">
                    <h3 className="mb-3 my-4 font-weight-bold">Recuperar Senha</h3>
                    <input onChange={e => setEmail(e.target.value)} className="form-control my-4" type="email" placeholder="E-mail"></input>

                    <div className="msg my-8 mb-4">
                        <span>{msg}</span>
                    </div>

                    <button onClick={recuperarSenha} type="button" className="btn btn-lg btn-block btn-senha my-4">Recuperar Senha</button>
                </form>
            </div>
        </>
    )
}

export default RecuperarSenha;