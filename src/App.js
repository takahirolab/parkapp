import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import jwtDecode from 'jwt-decode';


// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';


//Component
import themeObject from './util/theme';
import AuthRoute from './util/AuthRoute';
import Navbar_admin from './layout/Navbar_admin'

//pages

import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home';
import Footer from './layout/Footer';
import FindPark from './pages/findPark';
import FindActivity from './pages/findActivity'
import ReadArticle from './pages/readArticle'
import PostScream from './pages/PostScream'
import Admin from './pages/admin'

//
import axios from 'axios';
import parkList from './pages/parkList'


const theme = createMuiTheme(themeObject);

axios.defaults.baseURL =
  'https://asia-northeast1-parkr-23aa4.cloudfunctions.net/api';

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}



class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store ={store}>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <AuthRoute exact path="/login" component={Login} />
              <AuthRoute exact path="/signup" component={Signup} />
              <Route exact path="/park" component={FindPark} />
              <Route exact path="/activity" component={FindActivity} />
              <Route exact path="/article" component={ReadArticle} />
              <Route exact path="/post" component={PostScream} />

              <Route exact path="/admin" component={Admin} />
              <Route exact path="/admin/parklist" component={parkList} />
            </Switch>
          <Footer/>
         </Router>
      </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
