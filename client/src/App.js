import React, { useEffect } from 'react';


import { Switch, Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {checkUserSession} from './redux/user/user.actions';


import {GlobalStyle} from './global.styles';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  },[checkUserSession]) // this array makes sure it runs just one time, stops checkUserSession from re-rendering App.js every time currentUser changes
    // we put checkUserSession in the array because it's a prop passed from another componented  
  return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
          exact
          path='/signin' 
          render={() => currentUser ? (
          <Redirect to ='/' />
          ): (
          <SignInAndSignUpPage/>
          )
          }
           />
           <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>

      </div>
    );
  };

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
//  In the context of app.js the 1st arg should be null
export default connect(mapStateToProps, mapDispatchToProps)(App);
