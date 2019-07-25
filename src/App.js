import React from 'react';
import './App.css';
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


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();

  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (

      <div className="App">
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
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
//  In the context of app.js the 1st arg should be null
export default connect(mapStateToProps, mapDispatchToProps)(App);
