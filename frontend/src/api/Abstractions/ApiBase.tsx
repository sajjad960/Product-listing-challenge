import axios from "axios";
import autoBind from "auto-bind";
import {
  ConstructorProps,
  RequestProps,
  GetDeleteMethodProps,
  PostPutMethodProps,
} from "../../types";

export default class ApiBase {
  axiosClient;

  constructor({
    baseURL,
    formData,
    commonHeaders,
    timeout = 4000,
  }: ConstructorProps) {
    this.axiosClient = axios.create({
      baseURL,
      timeout,
      headers: {
        Accept: "application/json",
        "Content-Type": formData ? "multipart/form-data" : "application/json",
        ...commonHeaders,
      },
    });

    this.axiosClient.interceptors.response.use(
      (response) => response,
      (error) => {
        const errorData = error?.response?.data ?? {};

        if (!error?.response) {
          errorData.message = "Network Error: Unable to reach the server.";
        }
        throw errorData;
      }
    );
    autoBind(this);
  }

  async request({ options, fullResponse }: RequestProps) {
    const response = await this.axiosClient.request(options);
    if (fullResponse) return fullResponse;
    return response?.data;
  }
  async get({
    url,
    params,
    fullResponse = false,
    others,
  }: GetDeleteMethodProps) {
    const options = {
      url,
      method: "get",
      params,
      ...others,
    };
    return this.request({ options, fullResponse });
  }

  async post({ url, data, fullResponse = false, others }: PostPutMethodProps) {
    const options = {
      url,
      method: "post",
      data,
      ...others,
    };
    return this.request({ options, fullResponse });
  }

  async put({ url, data, fullResponse = false, others }: PostPutMethodProps) {
    const options = {
      url,
      method: "put",
      data,
      ...others,
    };
    return this.request({ options, fullResponse });
  }

  async delete({
    url,
    params,
    fullResponse = false,
    others,
  }: GetDeleteMethodProps) {
    const options = {
      url,
      method: "delete",
      params,
      ...others,
    };
    return this.request({ options, fullResponse });
  }
}
