import React from 'react';
import './App.css';

import Homepage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInandSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {createStructuredSelector} from 'reselect';
import { selectCurrentUser} from '../src/redux/user/user.selectors';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribedFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            
              id : snapShot.id,
              ...snapShot.data()
            
          });
         
        });
       
      }
      setCurrentUser(userAuth);
  });
 
    
  }
  componentWillUnmount(){
    this.unsubscribedFromAuth();
  }
render(){
  return (
    <div>
    <Header  />
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route  path="/shop" component={ShopPage} />
    <Route exact path='/checkout' component={CheckoutPage} />
    <Route  exact path="/signup" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInandSignUp/>)} />
    </Switch>
    </div>
  );
}
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
