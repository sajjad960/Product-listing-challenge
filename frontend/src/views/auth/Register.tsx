import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  Error,
  LinkText,
} from "./styles/authStyles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { registerFailure, registerSuccess } from "../../redux/slices/authSlice";
import useApi from "../../hooks/useApi";
import { RegisterResponse } from "../../types";

const Register = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //redux
  const dispatch: AppDispatch = useDispatch();
  const { registerError, isLoggedIn } = useSelector(
    (state: RootState) => state.auth
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
      dispatch(registerFailure("Please fill in all fields"));
      setIsLoading(false);
    } else {
      try {
        const registerResponse: RegisterResponse = await api.register({
          name,
          email,
          password,
        });
        dispatch(registerSuccess(registerResponse));
        setIsLoading(false);
      } catch (error) {
        dispatch(registerFailure((error as { message: string }).message));
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>
        {registerError && <Error>{registerError}</Error>}
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLoading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button type="submit">Register</Button>
        )}
        <LinkText>
          Already have an account? <Link to="/login">Login here</Link>
        </LinkText>
      </Form>
    </Container>
  );
};

export default Register;
