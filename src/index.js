import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback, Auth } from '@okta/okta-react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';
import { Route } from 'react-router-dom';


import * as authConstants from './constants/auth';
import * as router from './constants/router';
import { configureStore } from './store/configureStore';

import LandingPage from './pages/landing-page/LandingPage';

import './index.scss';

const { store, persistor } = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0585c8',
    },
    secondary: {
      main: '#383838',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '0.8rem',
    },
    fontFamily: [
      '"Helvetica Neue Light"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

const history = createBrowserHistory();

const auth = new Auth({
  history,
  issuer: authConstants.OKTA_ISSUER_URL,
  client_id: authConstants.OKTA_CLIENT_ID,
  redirect_uri: authConstants.OKTA_REDIRECT_URL,
  scope: ['openid', 'email', 'profile', 'address', 'phone', 'offline_access', 'groups']
});

const main = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
              <Security auth={auth}>
                <Switch>
                  <SecureRoute exact path={router.INDEX_PATH} component={LandingPage} />
                  <Route path={authConstants.IMPLICIT_CALLBACK_URL} component={ImplicitCallback} />
                </Switch>
              </Security>
            </Router >
        </PersistGate>
      </Provider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(main(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
