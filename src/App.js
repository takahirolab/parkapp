import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
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

import Login from './pages/login_mobile'
import Signup from './pages/signup'
import Home from './pages/home';
import Footer from './layout/Footer';
import ParkSearch from './pages/parkSearch';
import FindActivity from './pages/findActivity'
import ReadArticle from './pages/readArticle'
import PostScream from './pages/PostScream'
import Admin from './pages/admin'
import ParkDetail from './components/park/ParkDetail';
import About from './pages/About';
import Mypage from './pages/sidebar/Mypage';


//
import axios from 'axios';
import parkList from './pages/parkList'
import ActivityList from './pages/ActivityList';

import Like from './pages/sidebar/like'
import PostedPark from './pages/sidebar/postedPark'
import PostedActivity from './pages/sidebar/postedActivity'
import Guid from './pages/sidebar/guid'
import JoinActivity from './pages/sidebar/joinActivity'
import Ask from './pages/sidebar/ask'

import Weather from './pages/Weather'
import { Navbar } from './layout/Navbar';
import parkSearch from './pages/parkSearch';
import Users from './pages/parkSearch';


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
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <AuthRoute exact path="/login" component={Login} />
              <AuthRoute exact path="/signup" component={Signup} />
              <Route exact path="/park/:parkId" component={ParkDetail} />
              <Route exact path="/serch/:parkTag1" component={parkSearch} />
              <Route exact path="/about" component={About} />
              <Route exact path="/activity" component={FindActivity} />
              <Route exact path="/article" component={ReadArticle} />
              <Route exact path="/post" component={PostScream} />


            {/* ////////////////
            サイドバー
            /////////////// */}
              <Route exact path="/search" component={Users} />
              {/* <Route exact path="/search/city" render={() => <ParkSearch city={'東京都'} />}/> */}
              <Route exact path="/weather" component={Weather} />



            {/* ////////////////
            サイドバー
            /////////////// */}s
              <Route exact path="/mypage" component={Mypage} />
              <Route exact path="/like" component={Like} />
              <Route exact path="/postedPark" component={PostedPark} />
              <Route exact path="/postedActivity" component={PostedActivity} />
              <Route exact path="/guid" component={Guid} />
              <Route exact path="/joinActivity" component={JoinActivity} />
              <Route exact path="/ask" component={Ask} />


            {/* ////////////////
            アドミン
            /////////////// */}
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/admin/parklist" component={parkList} />
              <Route exact path="/admin/activitylist" component={ActivityList} />
            </Switch>
          {/* <Footer/> */}
         </Router>
      </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;


