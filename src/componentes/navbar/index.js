import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-grey21"></i>
      </button>
      <a className="nav-link" href="/"><i className="fas fa-cat fa-2x icon ml-3"></i></a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ml-5">
          <li className="nav-item active"> <Link to="/" className="nav-link">Pagina Inicial</Link></li>
          <li className="nav-item active"> <Link to="/cadastro" className="nav-link">Cadastrar</Link></li>
          <li className="nav-item active"> <Link to="/recuperarsenha" className="nav-link">Recuperar senha</Link></li>
          <li className="nav-item active"> <Link to="/meuspets" className="nav-link">Meus Pets</Link></li>
          <li className="nav-item active"> <Link to="/cadastropet" className="nav-link">Cadastrar novo Pet</Link></li>

          {/* {
                useSelector(state => state.usuarioLogado) > 0  ?
                    <>
                        <li className="nav-item active"><Link className="nav-link" to="/posts/meu">Meus Posts <span className="sr-only">(current)</span></Link></li>
                        <li className="nav-item active"><Link className="nav-link" to="/newpost">Publicar Post <span className="sr-only">(current)</span></Link></li>
                        <li className="nav-item active"><Link className="nav-link" onClick={()=> dispatch({type: 'LOGOUT'})}>Sair <span className="sr-only">(current)</span></Link></li>
                    </>
                    : //se o usuario n estiver logado 
                    <>
                        <li className="nav-item active"><Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link></li>
                        <li className="nav-item active"><Link className="nav-link" to="/newuser">Cadastrar <span className="sr-only">(current)</span></Link></li>
                        <li className="nav-item active"><Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link></li>
                    </>
            } */}
        </ul>
        <ul className="navbar-nav navbar-right">
          <li className="nav-item active"><Link className="nav-link" to="login"><span className="fas fa-sign-in-alt"></span> Entrar</Link></li>
          <li className="nav-item active"><a className="nav-link" href="/"><span className="fas fa-sign-out-alt"></span> Sair</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;