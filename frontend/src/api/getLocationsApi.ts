import axios, {AxiosResponse} from "axios";
import {SERVER_URL} from "../constants.ts";

export interface GetLocationsResponse {
    locationID: number
    name: string
    street: string
    city: string
}

const getLocationsApi: () => Promise<AxiosResponse<GetLocationsResponse[]>> =
    () => axios.get(`${SERVER_URL}/locations`, {
        headers: {
            'accept': 'application/json'
        }
    })

export default getLocationsApi