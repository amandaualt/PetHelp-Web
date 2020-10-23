import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '../src/store';
import { PersistGate } from 'redux-persist/integration/react';

// import Cadastro from './view/cadastro';
// import RecuperarSenha from './view/recuperarSenha';
// import Home from './view/home';
import Login from './view/login';
// import CadastroPet from './view/cadastropet';
// import MeusPets from './view/meuspets';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Login} />
              {/* <Route exact path='/home' component={Home} />
              <Route exact path='/cadastro' component={Cadastro} />
              <Route exact path='/recuperarsenha' component={RecuperarSenha} />
              <Route exact path='/cadastropet' component={CadastroPet} />
              <Route exact path='/meuspets' component={MeusPets} /> */}
            <Redirect to="/login" />
          </Switch>
        </BrowserRouter>
      </PersistGate>   
    </Provider>
  );
}

export default App;
