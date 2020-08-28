import React from 'react';
import './App.css';
import Homepage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInandSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unsubscribedFromAuth = null;
  componentDidMount(){
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
          })
         
        });
       
      }
      this.setState({currentUser : userAuth});
  });
    
  }
  componentWillUnmount(){
    this.unsubscribedFromAuth();
  }
render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser} />
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route  path="/shop" component={ShopPage} />
    <Route  path="/signup" component={SignInandSignUp} />
    </Switch>
    </div>
  );
}
}
export default App;
