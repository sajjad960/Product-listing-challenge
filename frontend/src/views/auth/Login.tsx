import React, { useState } from "react";
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  Error,
  LinkText,
} from "./styles/authStyles";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";

const Login = () => {
  const api = useApi();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      setError("");
      // Handle login logic here
      console.log("Email:", email);
      console.log("Password:", password);

      const loginResponse = api.login({ email, password });
      console.log(loginResponse);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <Error>{error}</Error>}
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
        <Button type="submit">Login</Button>
        <LinkText>
          Don't have an account? <Link to="/register">Register here</Link>
        </LinkText>
      </Form>
    </Container>
  );
};

export default Login;
