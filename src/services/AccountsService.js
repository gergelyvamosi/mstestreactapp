import http from "../http-common";

const findByNumber = number => {
  return http.get(`/accounts/${number}`);
};

const findByName = name => {
  return http.get(`/accounts/owner/${name}`);
};

const AccountsService = {
  findByNumber,
  findByName
};

export default AccountsService;
