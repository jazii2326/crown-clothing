import React from 'react';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectHiddenCart} from '../../redux/cart/cart.selectors';

const Header = ({currentUser, hidden}) => (
    <div className="header">
       <Link className='logo-container' to='/'>
       <Logo className='logo' />
       </Link>
       <div className='options'>
       <Link className="option" to="/shop">
       SHOP
        </Link>
        <Link className="option" to="/contact">
            CONTACT
        </Link>
   
   {
       currentUser ? 
          ( <div className='optoin' onClick={() => auth.signOut()}>
          SIGN OUT
          </div>
          
       ) : (
       <Link className="option" to="/signup">
       SIGN IN
       </Link>
       )
   }
       <CartIcon />
       </div>
       {
        hidden ? null : <CartDropdown/>
       }
       
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHiddenCart
});

export default connect(mapStateToProps)(Header);