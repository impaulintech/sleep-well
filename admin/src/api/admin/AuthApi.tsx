import { instance } from "../instance";

export interface ILoginParams {
  email: string;
  password: string;
}

const AuthApi = {
  login: (params: ILoginParams) => {
    const config = {
      url: "/login",
      method: "POST",
      params: {
        ...params,
      },
    };
    return instance.request(config);
  },

  logout: () => {
    const config = {
      url: "/logout",
      method: "POST",
    };
    return instance.request(config);
  },
};
export default AuthApi;
