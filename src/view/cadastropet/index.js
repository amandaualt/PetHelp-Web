import React from 'react';
// import { useSelector } from 'react-redux';
import Footer from '../../componentes/footer';
import NavBar from '../../componentes/navbar';
// import firebase from '../../config/firebase';
import './cadastropet.css';

function CadastroPet(){

    return(
        <>
        <NavBar></NavBar>
        <div className="col-12 cadpet">
                <div className="row">
                    <h1 className="font-wight-bold text-grey21 mx-auto">Cadastrar Pet</h1>
                </div>

                <form>
                    <div className="form-group my-5">
                        <label className="">Nome do Pet:<span><strong>*</strong></span></label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group my-5">
                        <label>Espécie:<span><strong>*</strong></span></label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group my-5">
                        <label>Selecione uma categoria:<span><strong>*</strong></span></label>
                        <select className="form-control">
                            <option disabled selected value>-- Selecione uma categoria --</option>
                            <option>Remedio</option>
                            <option>Ração</option>
                            <option>Passeio</option>
                        </select>
                    </div>
                    <div className="form-group my-5 row" >
                        <div className="col-6">
                            <label>Horário:<span><strong>*</strong></span></label>
                            <input type="time" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group my-5">
                        <label className="">Descrição:</label>
                        <textarea className="form-control" type="text" rows="2" />
                    </div>
                    <div className="form-group my-5">
                        <label>Upload de imagem:<span><strong>*</strong></span></label>
                        <input type="file" className="form-control" />
                    </div>
                    <div className="classclass">
                        <button onClick="" type="button" className="btn btn-block btn-lg btn-cadastro mt-3 mb-5 my-5">Cadastrar Pet</button>
                    </div>
                </form>
            </div>
        <Footer></Footer>
        </>
    );
}

export default CadastroPet;