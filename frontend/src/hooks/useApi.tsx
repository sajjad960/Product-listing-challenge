import { useMemo } from "react";
import useAuthToken from "./auth/useAuthToken";
import ApiMethods from "../api/ApiMethods";
import { ApiBaseUrl } from "../utils/ApiBaseUrl";

interface UseApiProps {
  formData?: boolean;
}
export default function useApi({ formData = false }: UseApiProps) {
  const { authToken } = useAuthToken();

  return useMemo(
    () =>
      new ApiMethods({
        baseURL: ApiBaseUrl,
        formData,
        commonHeaders: authToken
          ? { Authorization: `Bearer ${authToken}` }
          : {},
        timeout: 60000,
      }),
    [authToken, formData]
  );
}
