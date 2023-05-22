import DateEntity from "../../domain/DateEntity.ts";
import {useQuery} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import getDatesApi, {GetDatesResponse} from "../../api/getDatesApi.ts";

interface UseGetAvailableDatesQuery {
    error: string
    isError: boolean
    isLoading: boolean
    isSuccess: boolean
    dates: DateEntity[] | undefined
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
        dates: mapToDates(data),
    }
}

const mapToDates = (data: AxiosResponse<GetDatesResponse[]> | undefined): DateEntity[] | undefined =>
    data?.data.map(item => ({
        id: item.dataID,
        dateTime: item.datetime
    }))

export default useGetAvailableDatesQuery
