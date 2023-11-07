import axios from "axios";

const url = "https://gateway.scan-interfax.ru/api/v1/account/info";

function GetInfo() {
    const bearerToken = JSON.parse(localStorage.getItem("token")).accessToken;
    const config = {
        headers: { Authorization: `Bearer ${bearerToken}` },
    };
  return axios.get(url, config);
}

export default GetInfo;