import Date from "../../domain/Date.ts";
import {useQuery} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import getDatesApi, {GetDatesResponse} from "../../api/getDatesApi.ts";

interface UseGetAvailableDatesQuery {
    error: string
    isError: boolean
    isLoading: boolean
    isSuccess: boolean
    services: Date[] | undefined
}

const useGetAvailableDatesQuery = (): UseGetAvailableDatesQuery => {
    const {
        data,
        isError,
        isSuccess,
        isLoading,
        error
    } = useQuery<AxiosResponse<GetDatesResponse[]>, AxiosError>('dates', getDatesApi)

    return {
        error: error?.message || "",
        isError: isError,
        isLoading: isLoading,
        isSuccess: isSuccess,
        services: mapToDates(data),
    }
}

const mapToDates = (data: AxiosResponse<GetDatesResponse[]> | undefined): Date[] | undefined =>
    data?.data.map(item => ({
        id: item.dataID,
        dateTime: item.datetime
    }))

export default useGetAvailableDatesQuery
