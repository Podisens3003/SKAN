import axios from "axios";

const url = "https://gateway.scan-interfax.ru/api/v1/documents";

function GetDocuments(
    params
) {
    const payload = {
        ids: params
    };

    const bearerToken = JSON.parse(localStorage.getItem("token")).accessToken;
    const config = {
        headers: { Authorization: `Bearer ${bearerToken}` },
    };

    return axios.post(url, payload, config);
}

export default GetDocuments;