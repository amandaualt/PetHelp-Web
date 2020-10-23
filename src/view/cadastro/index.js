import React, {useState} from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './cadastro.css';
import NavBar from '../../componentes/navbar';

function Cadastro(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [nome, setNome] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar() {
        setCarregando(1);
        setMsgTipo(null);


        if (!email || !senha || !nome) {
            setMsgTipo('erro');
            setMsg('Você não preencheu todos os campos!');
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setCarregando(0);
            setMsgTipo('ok')
        }).catch(erro => {
            setMsgTipo('erro');
            setCarregando(0);
            switch (erro.message) {
                case 'Password should be at least 6 characteres.':
                    setMsg('A senha deve ter pelo menos 6 caracteres');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Esse e-mail ja está sendo utilizado');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('O formato de e-mail é invalido');
                    break;
                case (setNome == null):
                    setMsg('Campo nome vazio');
                    break;
                default:
                    setMsg('Não foi possivel cadastrar, Por favor tente mais tarde.');
                    break;
            }
        });
    }
    return(
        <>
            <NavBar></NavBar>
            <div className="form-cadastro">
                <form className="text-center form-login mx-5 was-validated">
                    <h1 className="font-wight-bold text-grey21 mt-5">Cadastro</h1>
                    
                    <label className="my-3 lbcad" htmlFor="nome" >Nome: </label>
                    <input onChange={(e) => setNome(e.target.value)}  className="form-control" type="text" id="nome" required/>
                    <label className="my-3 lbcad" htmlFor="email">Email: </label>
                    <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" id="email" required/>
                    <label className="my-3 lbcad" htmlFor="senha">Senha: </label>
                    <input onChange={(e) => setSenha(e.target.value)} className="form-control" type="password" id="senha" required/>

                    {
                        carregando ? <div className="spinner-border text-secondary my-4" role="status">
                        <span className="sr-only">Loading...</span> </div> :
                        <button onClick={cadastrar} type="button" className="btn btn-lg btn-block my-5 btn-cadastro">Cadastrar</button>
                    }
                    <div className="text-black text-center">
                        {msgTipo === 'ok' && <span><strong>AEEEE!</strong>Cadastro realizado com sucesso</span>}
                        {msgTipo === 'erro' && <span><strong>{msg}</strong></span>}

                    </div>

                </form>
            </div>
        </>
    );
}

export default Cadastro;