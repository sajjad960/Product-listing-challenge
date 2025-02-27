import autoBind from "auto-bind";
import ApiBase from "./Abstractions/ApiBase";
import {
  ConstructorProps,
  RegisterParams,
  PostPutMethodProps,
  LoginParams,
  GetDeleteMethodProps,
  LoginResponse,
  RegisterResponse,
} from "../types";
import { GetAllProductsResponce } from "../types/productTypes";

export default class ApiMethods extends ApiBase {
  constructor(props: ConstructorProps) {
    super(props);
    autoBind(this);
  }
  async register(data: RegisterParams) {
    const passingData: PostPutMethodProps = {
      url: "/users/register",
      data,
      fullResponse: false,
      others: undefined,
    };
    const resultData: RegisterResponse = await this.post(passingData);
    return resultData;
  }
  async login(data: LoginParams) {
    const passingData: PostPutMethodProps = {
      url: "/users/login",
      data,
      fullResponse: false,
      others: undefined,
    };
    const resultData: LoginResponse = await this.post(passingData);
    return resultData;
  }

  async getProducts() {
    const passingData: GetDeleteMethodProps = {
      url: `/products`,
      params: {},
      fullResponse: false,
      others: undefined,
    };
    const resultData: GetAllProductsResponce = await this.get(passingData);
    return resultData;
  }
}
