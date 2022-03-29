import { useContext, useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import {
  FormContainer,
  SubtitleContainer,
  TitleContainer,
  SignInContainer,
} from "../sign-in/SignIn.styles";
import { ButtonContainer } from "./SignUp.styles";

import { UserContext } from "../../context/provider/user/user.provider";

const SignUp = () => {
  const { signUpUser } = useContext(UserContext);

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { username, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password's don't match");
      return;
    }

    signUpUser({ username, email, password, confirmPassword});

    setUserCredentials({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <SignInContainer>
      <TitleContainer>I don't have an acount</TitleContainer>
      <SubtitleContainer>
        Sign up with your email and password
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
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          label="Confirm Password"
        />
        <ButtonContainer>
          <CustomButton type="submit">Sign up</CustomButton>
        </ButtonContainer>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignUp;
