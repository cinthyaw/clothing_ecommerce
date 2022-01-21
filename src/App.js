import './App.css';
import HomePage from './pages/homepage.component';
import { Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './components/sign-in-and-sign-up/sign-in.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils'
import React from 'react';


class App extends React.Component {
  constructor(props){
  super(props);

  this.state = {
    currentUser: null
  }

  }

  unsubscribeFromAuth = null;


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  
  
  render() { 
      return (
        <div>
          <Header currentUser={this.state.currentUser}></Header>
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route path="/signin" component={SignInSignUp}></Route>
            </Switch>
        </div>
      );
    }
  
}

export default App;
