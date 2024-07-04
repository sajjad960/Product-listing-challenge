import { JwtPayload, jwtDecode } from "jwt-decode";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useAuthToken = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  const [authToken, setAuthToken] = useState<string | null>(token);

  const decode: JwtPayload | null = useMemo(() => {
    return authToken ? jwtDecode(authToken) : null;
  }, [authToken]);

  const isExpired = useMemo(() => {
    return decode?.exp && decode?.exp * 1000 < new Date().getTime();
  }, [decode]);

  const userId = useMemo(() => decode?.sub && decode?.sub, [decode]);

  return {
    authToken,
    setAuthToken,
    isExpired,
    userId,
  };
};

export default useAuthToken;
