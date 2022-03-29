import { useContext, useEffect } from "react";

import { Route, Switch, Redirect } from "react-router-dom";


import "./App.css";

import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import Header from "./components/header/Header";

import SignInandSignUpPage from "./pages/SignInandSignUpPage/SignInandSignUpPage";
import { UserContext } from "./context/provider/user/user.provider";

const App = () => {
  const {userLoggedIn, checkUserSession} = useContext(UserContext);

  useEffect(()=>{
    console.log("App rendered");
    checkUserSession();
  },[checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={()=> userLoggedIn ? <Redirect to="/" /> : <SignInandSignUpPage />}
        />
      </Switch>
    </div>
  );
};

export default App;
