import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import './header.styles.scss';

const handleSignOut = () => {
    auth.signOut()
}

const Header = ({ currentUser, hidden }) => (
    <div className = 'header'>
        <Link to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? (               
                 <div className='option' onClick={handleSignOut}>
                     SIGN OUT
                </div> 
            ) : (
                <Link className='option' to='/signin'> SIGN IN </Link>
            )}
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
        
    </div>
)

// this function gets the reducer from the root reducer to use

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

// 1st argument has to be the reducer in the root reducer that we need to do an action. in this case userReducer
export default connect(mapStateToProps)(Header);