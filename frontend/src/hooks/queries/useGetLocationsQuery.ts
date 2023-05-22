import Location from "../../domain/Location.ts";
import {useQuery} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import getLocationsApi, {GetLocationsResponse} from "../../api/getLocationsApi.ts";

interface UseGetLocationsQuery {
    error: string
    isError: boolean
    isLoading: boolean
    isSuccess: boolean
    services: Location[] | undefined
}


const useGetLocationQuery = (): UseGetLocationsQuery => {
    const {
        data,
        isError,
        isSuccess,
        isLoading,
        error
    } = useQuery<AxiosResponse<GetLocationsResponse[]>, AxiosError>('locations', getLocationsApi)

    return {
        error: error?.message || "",
        isError: isError,
        isLoading: isLoading,
        isSuccess: isSuccess,
        services: mapToServices(data),
    }
}

const mapToServices = (data: AxiosResponse<GetLocationsResponse[]> | undefined): Location[] | undefined =>
    data?.data.map(item => ({
        ...item,
        id: item.locationID
    }))

export default useGetLocationQuery

