import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store/store';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import About from './containers/About/About';
import Home from './containers/Home/Home';
import './assets/css/main.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <BaseLayout>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </BaseLayout>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
