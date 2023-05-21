import {useQuery} from "react-query";
import {getServicesApi, GetServicesResponse} from "../../api/getServicesApi.ts";
import Service from "../../domain/Service.ts";
import {AxiosError, AxiosResponse} from "axios";

interface UseGetServicesQuery {
    error: string
    isError: boolean
    isLoading: boolean
    isSuccess: boolean
    services: Service[] | undefined
}


const useGetServicesQuery = (): UseGetServicesQuery => {
    const {
        data,
        isError,
        isSuccess,
        isLoading,
        error
    } = useQuery<AxiosResponse<GetServicesResponse[]>, AxiosError>('services', getServicesApi)

    return {
        error: error?.message || "",
        isError: isError,
        isLoading: isLoading,
        isSuccess: isSuccess,
        services: mapToServices(data),
    }
}

const mapToServices = (data: AxiosResponse<GetServicesResponse[]> | undefined): Service[] | undefined =>
    data?.data.map(item => ({
        id: item.servicesID,
        name: item.name,
        price: item.price,
        type: item.type,
    }))

export default useGetServicesQuery