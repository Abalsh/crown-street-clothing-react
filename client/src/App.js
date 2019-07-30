import React, { useEffect, lazy, Suspense } from 'react';

import { Switch, Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';

import {checkUserSession} from './redux/user/user.actions';

import {GlobalStyle} from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

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
          <Suspense fallback={<div>...Loading</div>}>
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
           </Suspense>
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
