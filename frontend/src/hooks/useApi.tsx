import { useMemo } from "react";
import useAuthToken from "./auth/useAuthToken";
import ApiMethods from "../api/ApiMethods";
import { ApiBaseUrl } from "../utils/ApiBaseUrl";

export default function useApi(formdata?: boolean) {
  const { authToken } = useAuthToken();

  return useMemo(
    () =>
      new ApiMethods({
        baseURL: ApiBaseUrl,
        formData: formdata ?? false,
        commonHeaders: authToken
          ? { Authorization: `Bearer ${authToken}` }
          : {},
        timeout: 4000,
      }),
    [authToken, formdata]
  );
}
