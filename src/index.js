import React from 'react';
import Render from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import Home from "./containers/Home";

const store = createStore(reducer);

Render.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);