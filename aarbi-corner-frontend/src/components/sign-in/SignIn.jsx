import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../context/provider/user/user.provider";
import BorderSpinner from "../border-spinner/BorderSpinner.component";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import {
  ButtonGroup,
  FormContainer,
  SignInContainer,
  SubtitleContainer,
  TitleContainer,
} from "./SignIn.styles";

const SignIn = () => {
  const { loginUser, userLoggingState:{loggingIn} } = useContext(UserContext);

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  let { username, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = userCredentials;

    loginUser({ username, password });
  };

  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <SubtitleContainer>
        Sign in with your email and password
      </SubtitleContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          type="username"
          name="username"
          onChange={handleChange}
          value={username}
          label="Username"
        />
        <FormInput
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          label="Password"
        />
        <ButtonGroup>
          <CustomButton type="submit" inverted={loggingIn}>
            {loggingIn?<BorderSpinner width={"25px"} height={"25px"} />:"Sign In"}
          </CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
          >
            Google Sign In
          </CustomButton>
        </ButtonGroup>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignIn;
