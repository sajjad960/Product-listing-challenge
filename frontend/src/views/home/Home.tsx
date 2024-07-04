import { useNavigate } from "react-router-dom";
import { Container, Title, JsonContainer, Button } from "./styles/homeStyles";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
    email: `email${i + 1}@example.com`,
    password: `password${i + 1}`,
  }));

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Container>
      <Title>Home</Title>
      <Button onClick={handleLogout}>Logout</Button>{" "}
      <JsonContainer>{JSON.stringify(data, null, 2)}</JsonContainer>
    </Container>
  );
};

export default Home;
