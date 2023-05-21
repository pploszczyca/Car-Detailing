import {useEffect, useState} from "react";
import useGetServicesQuery from "../../hooks/queries/useGetServicesQuery.ts";
import Service from "../../domain/Service.ts";

interface ServiceItem {
    id: number
    name: string
    price: number
    isChecked: boolean
}

interface ServiceGroup {
    type: string
    serviceItems: ServiceItem[]
}

interface UseServicesPage {
    error: string
    isConfirmButtonEnabled: boolean
    isError: boolean
    isLoading: boolean
    isSumVisible: boolean
    onServiceChecked: (serviceId: number) => void
    onSubmitButtonClicked: () => void
    serviceGroups: ServiceGroup[]
    sumOfCheckedServices: number
}

const useServicesPage = (): UseServicesPage => {
    const [
        serviceGroups,
        setServiceGroups
    ] = useState<ServiceGroup[]>([])
    const [
        sumOfCheckedServices,
        setSumOfCheckedServices
    ] = useState(0)

    const {
        isError,
        isLoading,
        isSuccess,
        services,
        error
    } = useGetServicesQuery()

    useEffect(() => {
        if (isSuccess && services != undefined) {
            const groups = mapServicesToServiceGroups(services)

            // Needed condition to prevent maxDeep hook error
            if (JSON.stringify(groups) !== JSON.stringify(serviceGroups)) {
                setServiceGroups(groups)
            }
        }
    }, [isSuccess, services, serviceGroups])


    function mapServicesToServiceGroups(services: Service[]): ServiceGroup[] {
        const serviceGroups = services.reduce((groups: Record<string, ServiceItem[]>, service) => {
            const {id, name, price, type} = service;

            const newItem: ServiceItem = {id, name, price, isChecked: false};

            if (!groups[type]) {
                return {...groups, [type]: [newItem]};
            }

            return {...groups, [type]: [...groups[type], newItem]};
        }, {});

        return Object.entries(serviceGroups).map(([type, serviceItems]): ServiceGroup => ({type, serviceItems}));
    }

    useEffect(() => {
        const newSum = serviceGroups.reduce((total, serviceGroup) => {
            const groupTotal = serviceGroup.serviceItems.reduce((groupTotal, serviceItem) =>
                serviceItem.isChecked ? groupTotal + serviceItem.price : groupTotal, 0);

            return total + groupTotal;
        }, 0);

        if (newSum !== sumOfCheckedServices) {
            setSumOfCheckedServices(newSum)
        }
    }, [serviceGroups, sumOfCheckedServices])


    const onServiceChecked = (serviceId: number) => {
        const groups = serviceGroups
            .map(group => ({
                ...group,
                serviceItems: group.serviceItems.map(service => ({
                    ...service,
                    isChecked: service.id == serviceId || (service.id != serviceId && service.isChecked)
                })),
            }))

        setServiceGroups(groups)
    }

    const onSubmitButtonClicked = () => {
        // TODO
    }

    return {
        error: error,
        isConfirmButtonEnabled: false,
        isLoading: isLoading,
        isError: isError,
        isSumVisible: sumOfCheckedServices > 0,
        onServiceChecked: onServiceChecked,
        onSubmitButtonClicked: onSubmitButtonClicked,
        serviceGroups: serviceGroups,
        sumOfCheckedServices: sumOfCheckedServices
    }
}

export default useServicesPage