import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './login.css';


function Logar() {

    
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function autenticar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => { 
            setTimeout(() => {
                dispatch({type: 'LOGIN', usuarioEmail: email})
            }, 2000)
        })
            .catch(erro => {
                setMsgTipo('erro');
            })
    }

    return (
        <div className="login-content d-flex align-items-center">
             {
                useSelector(state=> state.usuarioLogado) > 0 ? <Redirect to="/" /> : null
            }
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <i className="fas fa-cat text-grey21 fa-5x mb-2"></i>
                    <h1 className="h3 mb-3 text-grey21 font-weight-bold" >Entrar no PetHelp </h1>
                </div>
                <div className="my-2">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="idEmail" className="form-control my-2" placeholder="seunome@email.com" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" id="idPass" className="form-control my-2" placeholder="Senha" />
                    <button onClick={autenticar} className="btn btn-lg btn-login btn-block my-2" type="button">Entrar</button>
                </div>

                <div className="option-login mt-2 text-center">
                    <Link to="/recuperarsenha" className="mx-2">Esqueceu sua senha?</Link>
                    <span className="text-grey21 font-weight-bold">  .  </span>
                    <Link to="/cadastro" className="mx-2" >Inscreva-se no PetHelp </Link>
                </div>

                <div className="text-grey21 text-center my-5">
                        {msgTipo === 'erro' && <span><strong>Por favor, verifique se seus dados estão corretos! </strong></span>}

                </div>

            </form>
        </div>
    );
}

export default Logar;
