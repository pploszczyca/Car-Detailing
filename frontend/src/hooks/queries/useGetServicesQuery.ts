import {useQuery} from "react-query";
import {getServicesApi, GetServicesResponse} from "../../api/getServicesApi.ts";
import ServiceEntity from "../../domain/ServiceEntity.ts";
import {AxiosError, AxiosResponse} from "axios";

interface UseGetServicesQuery {
    error: string
    isError: boolean
    isLoading: boolean
    isSuccess: boolean
    services: ServiceEntity[] | undefined
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

const mapToServices = (data: AxiosResponse<GetServicesResponse[]> | undefined): ServiceEntity[] | undefined =>
    data?.data.map(item => ({
        id: item.servicesID,
        name: item.name,
        price: item.price,
        type: item.type,
    }))

export default useGetServicesQuery