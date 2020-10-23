import React from 'react';
import './home.css'
import NavBar from '../../componentes/navbar';
import Footer from '../../componentes/footer';

function Home() {
    return (
        <>
            <div className="">
                <NavBar></NavBar>
                <div className="homepage col-12">
                    <div className="row">
                        <h1 className="titulo mx-auto">PET HELP</h1>
                        <div className="col-12 pets">
                            <i className="fas fa-cat iconcat fa-flip-horizontal"></i>
                            <h3 className="mx-auto" >Adicione o horario das rações e remedios do seu Pet para que você não esqueça.</h3>
                        </div>

                        <div className="col-12 pets">
                            <i className="fas fa-dog icondog"></i>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Home;