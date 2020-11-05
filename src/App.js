import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import jwtDecode from 'jwt-decode';
import ScrollToTop from './util/ScrollToTop'


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

import Login from './pages/login_mobile'
import Signup from './pages/signup'
import Home from './pages/home/home';
import Footer from './layout/Footer';
import ParkSearch from './pages/Search/parkSearch';

import PostScream from './pages/PostScream'
import Admin from './pages/admin/admin'
import ParkDetail from './components/park/ParkDetail';
import About from './pages/home/About';
import Mypage from './pages/sidebar/Mypage';
import { MypageDashbord } from './pages/sidebar/MypageDashbord';
import { MypageComment } from './pages/sidebar/MypageComment';
import MypagePost from './pages/sidebar/MypagePostPark';
import history from './util/history'


//
import axios from 'axios';
import parkList from './pages/admin/admin'

import Like from './pages/sidebar/like'
import PostedPark from './pages/sidebar/postedPark'

import Guid from './pages/sidebar/guid'
import JoinActivity from './pages/sidebar/joinActivity'
import Ask from './pages/sidebar/ask'

import Weather from './pages/Weather'

import parkSearch from './pages/Search/parkSearch';
import Users from './pages/Search/parkSearch';

const theme = createMuiTheme(themeObject);

axios.defaults.baseURL =
  'https://asia-northeast1-parkapp-9cd06.cloudfunctions.net/api';

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

function App()  {

    return (
      <MuiThemeProvider>
        <Provider store ={store}>
          <Router history={history}>
          <ScrollToTop>

            <Switch>
              <Route exact path="/" component={Home} />
              <AuthRoute exact path="/login" component={Login} />
              <AuthRoute exact path="/signup" component={Signup} />
              <Route exact path="/park/search" component={parkSearch} />
              <Route　name="park" exact path="/park/:parkId" component={ParkDetail} />
              <Route exact path="/about" component={About} />
              <Route exact path="/post" component={PostScream} />

            {/* ////////////////
            サイドバー
            /////////////// */}

              <Route exact path="/search" component={Users} />
              <Route exact path="/weather" component={Weather} />



            {/* ////////////////
            サイドバー
            /////////////// */}
              <Route exact path="/mypage" component={Mypage} />
              <Route exact path="/dashbord" component={MypageDashbord} />
              <Route exact path="/comment" component={MypageComment} />
              <Route exact path="/mypage/post" component={MypagePost} />
              <Route exact path="/like" component={Like} />
              <Route exact path="/postedPark" component={PostedPark} />

              <Route exact path="/guid" component={Guid} />
              <Route exact path="/ask" component={Ask} />


            {/* ////////////////
            アドミン
            /////////////// */}
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/admin/parklist" component={parkList} />

            </Switch>
              <Footer/>
              </ScrollToTop>
         </Router>
      </Provider>
      </MuiThemeProvider>
    );

}

export default App;


