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
import useApi from "../../hooks/useApi";
import { LoginResponse } from "../../types";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess } from "../../redux/slices/authSlice";

const Login = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //redux
  const dispatch: AppDispatch = useDispatch();
  const { loginError, isLoggedIn } = useSelector(
    (state: RootState) => state.auth
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
      dispatch(loginFailure("Please fill in all fields"));
      setIsLoading(false);
    } else {
      try {
        const loginResponse: LoginResponse = await api.login({
          email,
          password,
        });
        dispatch(loginSuccess(loginResponse));
        setIsLoading(false);
      } catch (error) {
        dispatch(loginFailure((error as { message: string }).message));
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
        <Title>Login</Title>
        {loginError && <Error>{loginError}</Error>}
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
          <Button type="submit">Login</Button>
        )}

        <LinkText>
          Don't have an account? <Link to="/register">Register here</Link>
        </LinkText>
      </Form>
    </Container>
  );
};

export default Login;
