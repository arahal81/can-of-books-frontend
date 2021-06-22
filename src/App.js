import React from 'react';
import Header from './Header';
//import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  <Route exact path="/" component={isAuthenticated ? BestBooks : Login} />
             
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                <Route exact path="/Profile" component={Profile} />
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
