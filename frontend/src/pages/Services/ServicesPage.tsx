import {ServicesContainerWithNavbar} from "../../components/Navbar/ContainerWithNavbar.tsx";
import Title from "../../components/Title/Title.tsx";
import useServicesPage from "./useServicesPage.ts";
import SecondTitle from "../../components/SecondTitle/SecondTitle.tsx";
import {GroupContainer, ServiceItemContainer} from "./ServicesPageContainers.tsx";
import Text from "../../components/Text/Text.tsx";
import Checkbox from "../../components/Checkbox/Checkbox.tsx";

export function ServicesPage() {
    const {
        error,
        isConfirmButtonEnabled,
        isError,
        isLoading,
        isSumVisible,
        onServiceChecked,
        onSubmitButtonClicked,
        serviceGroups,
        sumOfCheckedServices,
    } = useServicesPage()

    if(isLoading) {
        return <Title>Loading ...</Title>
    }

    return <ServicesContainerWithNavbar>
        <Title>Wybierz komplet usług dla Twojego samochodu:</Title>
            {serviceGroups.map(group =>
                <GroupContainer>
                    <SecondTitle>{group.type}</SecondTitle>
                    {group.serviceItems.map(service =>
                        <ServiceItemContainer>
                            <Checkbox onClick={() => onServiceChecked(service.id)}/>
                            <Text>{service.name} - ${service.price}</Text>
                        </ServiceItemContainer>
                    )}
                </GroupContainer>
            )}
    </ServicesContainerWithNavbar>
}