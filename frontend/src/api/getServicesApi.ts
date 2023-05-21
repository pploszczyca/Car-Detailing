import axios, {AxiosResponse} from "axios";
import {SERVER_URL} from "../constants.ts";

export interface GetServicesResponse {
    servicesID: number
    name: string
    type: string
    price: number
}

export const getServicesApi: () => Promise<AxiosResponse<GetServicesResponse[]>> =
    () => axios.get(`${SERVER_URL}/Services`, {
        headers: {
            'accept': 'application/json'
        }
    })