import {apiV1} from "../global";
import {NetworkRequest} from "../types/network";
import strings from "./strings";

export const makeUrl = (endpoint: string) => apiV1 + endpoint;

export const makeRequest = (request: NetworkRequest) => {
    const {url, method, body, omitAuth} = request;
    const headers: any = {'Content-Type': 'application/json'};

    if (!omitAuth) {
        const token = localStorage.getItem(strings.accessToken);
        headers.Authorization = `Token ${token}`
    }

    return fetch(url, {method, headers, body})
        .then(response => response.json());
};