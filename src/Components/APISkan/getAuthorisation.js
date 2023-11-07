import axios from "axios";

const url = "https://gateway.scan-interfax.ru/api/v1/account/login";

function GetAuthorisationToken({ login, password }) {
  return axios.post(url, { login, password });
}

export default GetAuthorisationToken;
