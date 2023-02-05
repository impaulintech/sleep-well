import { instance } from "../instance";

export interface IUserParams {
  password?: string;
  password_confirmation?: string;
}

const UserApi = {
  updateUser: (params: IUserParams) => {
    return instance.put("/user/update", params);
  },
};
export default UserApi;
