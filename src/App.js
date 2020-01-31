import React from 'react';
import {
  GlobalStyled
} from './style.js';
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {
  IconFont
} from './statics/iconfont/iconfont';
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyled/>
        <IconFont/>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
            </div>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
