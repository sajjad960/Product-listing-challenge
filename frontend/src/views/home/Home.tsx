import { Container, Title, JsonContainer } from "./styles/homeStyles";

const Home = () => {
  const data = {
    name: "f",
    email: "fd@example.com",
    password: "passwosssrd123",
  };

  return (
    <Container>
      <Title>Home</Title>
      <JsonContainer>{JSON.stringify(data, null, 2)}</JsonContainer>
    </Container>
  );
};

export default Home;
