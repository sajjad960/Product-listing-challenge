import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  JsonContainer,
  Button,
  Error,
  Loading,
} from "./styles/homeStyles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { useCallback, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import {
  getProductsFailure,
  getProductsSuccess,
} from "../../redux/slices/productSlice";
import { AppDispatch, RootState } from "../../redux/store";

const Home = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //redux
  const dispatch: AppDispatch = useDispatch();
  const { products, error } = useSelector((state: RootState) => state.products);

  const fetchProduct = useCallback(async () => {
    setIsLoading(true);
    try {
      const productsResponse = await api.getProducts();
      dispatch(getProductsSuccess(productsResponse.products));
      setIsLoading(false);
    } catch (error) {
      dispatch(getProductsFailure((error as { message: string }).message));
      setIsLoading(false);
    }
  }, [api, dispatch]);

  useEffect(() => {
    fetchProduct();
  }, [api, fetchProduct]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Container>
      <Title>Home</Title>
      {error && <Error>{error}</Error>}
      <Button onClick={handleLogout}>Logout</Button>{" "}
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <JsonContainer>{JSON.stringify(products, null, 2)}</JsonContainer>
      )}
    </Container>
  );
};

export default Home;
