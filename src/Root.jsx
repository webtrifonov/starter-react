import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/store';
import './styles/main.scss';
import Loader from './components/icons/Loader/Loader';
import withLayout from './utils/hocs';
import BaseModal from './modules/BaseModal/BaseModal';
import Tooltip from './modules/Tooltip/Tooltip';
const BaseLayout = lazy(() => import('./layouts/BaseLayout/BaseLayout'));
// const BaseModal = lazy(() => import('./modules/BaseModal/BaseModal'));
const Home = lazy(() => import('./containers/Home/Home'));
const About = lazy(() => import('./containers/About/About'));

function Root() {
  return (
    <Provider store={store}>
      <Tooltip />
      <BaseModal />
      <BrowserRouter>
        <Suspense fallback={<Loader global />}>
          <Switch>
            <Route path="/about" component={withLayout(BaseLayout, About)} />
            <Route path="/" component={withLayout(BaseLayout, Home)} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
