import axios from "axios";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userLoggingState, setUserLoggingState] = useState({
    loggingIn: false,
    loggedIn: false
  });
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens"))
      : null
  );

  const baseUrl = "http://127.0.0.1:8000";

  let loginUser = ({ username, password }) => {
    setUserLoggingState({
      loggingIn: true,
      loggedIn: false
    });
    axios.post(`${baseUrl}/token/`, {
      username,
      password
    }).then(
      response=>{
        if(response.status === 200) {
          setAuthTokens(response.data);
          setUserLoggingState({
            loggingIn: false,
            loggedIn: true
          });
          localStorage.setItem("tokens", JSON.stringify(response.data));
        } else {
          setUserLoggingState({
            loggingIn: false,
            loggedIn: false
          });
          alert("An error occoured while logging in the user");
        }
      }
    )
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUserLoggingState({
      loggingIn: false,
      loggedIn: false
    });
    localStorage.removeItem("tokens");
  };

  const refreshAccessToken = ({refresh})=>{
    axios.post(`${baseUrl}/token/refesh/`, {
      refresh
    }).then(
      response=>{
        if(response.status === 200) {
          setAuthTokens({...authTokens, access:response.data.access});
          setUserLoggingState({
            loggingIn: false,
            loggedIn: true
          });
          localStorage.setItem("tokens", JSON.stringify({refresh, access:response.data.access}));
        } else {
          logoutUser();
        }
      }
    )
  }

  const checkUserSession = async () => {
    authTokens && axios.post(`${baseUrl}/token/verify/`, {token:authTokens?.access}).then(
      response=>{
        if(response.status === 200) {
          setUserLoggingState({
            loggingIn: false,
            loggedIn: true
          });
        } else if(response.status===401) {
          refreshAccessToken();
        }
      }
    );
  };

  const signUpUser = ({ username, email, password, confirmPassword }) => {
    axios.post(`${baseUrl}/register/`, {
      username,
      email,
      password,
      password2:confirmPassword
    }).then(
      response=>{
        if (response.status === 201) {
          loginUser({username, password})
        }
      }
    )
  };

  return (
    <UserContext.Provider
      value={{
        checkUserSession,
        loginUser,
        logoutUser,
        userLoggingState,
        signUpUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
