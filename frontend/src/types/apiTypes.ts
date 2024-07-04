export interface ConstructorProps {
  baseURL: string;
  formData: boolean;
  commonHeaders: object;
  timeout: number;
}

export interface RequestProps {
  options: object;
  fullResponse: boolean;
}

export interface PostPutMethodProps {
  url: string;
  data: object;
  fullResponse: boolean;
  others: object | undefined;
}

export interface GetDeleteMethodProps {
  url: string;
  params: object;
  fullResponse: boolean;
  others: object | undefined;
}
