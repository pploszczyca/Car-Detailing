import axios, {AxiosResponse} from "axios";
import {SERVER_URL} from "../constants.ts";

export interface GetDatesResponse {
    dataID: number
    datetime: string
}

const getDatesApi: () => Promise<AxiosResponse<GetDatesResponse[]>> =
    () => axios.get(`${SERVER_URL}/dates`, {
        headers: {
            'accept': 'application/json'
        }
    })

export default getDatesApi