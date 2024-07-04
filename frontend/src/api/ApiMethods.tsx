import autoBind from "auto-bind";
import ApiBase from "./Abstractions/ApiBase";
import {
  ConstructorProps,
  RegisterParams,
  PostPutMethodProps,
  LoginParams,
  GetDeleteMethodProps,
} from "../types";

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
    const resultData = await this.post(passingData);
    return resultData;
  }
  async login(data: LoginParams) {
    const passingData: PostPutMethodProps = {
      url: "/users/login",
      data,
      fullResponse: false,
      others: undefined,
    };
    const resultData = await this.post(passingData);
    return resultData;
  }

  async getProducts() {
    const passingData: GetDeleteMethodProps = {
      url: `/products`,
      params: {},
      fullResponse: false,
      others: undefined,
    };
    const resultData = await this.get(passingData);
    return resultData;
  }
}
