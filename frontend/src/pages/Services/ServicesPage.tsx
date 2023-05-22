import {ServicesContainerWithNavbar} from "../../components/Navbar/ContainerWithNavbar.tsx";
import Title from "../../components/Title/Title.tsx";
import useServicesPage from "./useServicesPage.ts";
import SecondTitle from "../../components/SecondTitle/SecondTitle.tsx";
import {
    GroupContainer,
    MainContainer,
    ServiceItemContainer,
    ServiceListContainer, SubmitButtonContainer,
    SumContainer
} from "./ServicesPageContainers.tsx";
import Text from "../../components/Text/Text.tsx";
import Checkbox from "../../components/Checkbox/Checkbox.tsx";
import Button from "../../components/Button/Button.tsx";

export function ServicesPage() {
    const {
        error,
        isConfirmButtonDisabled,
        isError,
        isLoading,
        isSumVisible,
        onServiceChecked,
        onSubmitButtonClicked,
        serviceGroups,
        sumOfCheckedServices,
    } = useServicesPage()

    if (isLoading) {
        return <Title>Loading ...</Title>
    }

    if(isError) {
        return <Title>Error: {error}</Title>
    }

    return <ServicesContainerWithNavbar>
        <MainContainer>
            <ServiceListContainer>
                <Title>Wybierz komplet usług dla Twojego samochodu:</Title>
                {serviceGroups.map((group, index) =>
                    <GroupContainer>
                        <SecondTitle>{index + 1}.{group.type}</SecondTitle>
                        {group.serviceItems.map(service =>
                            <ServiceItemContainer>
                                <Checkbox checked={service.isChecked} onChange={() => onServiceChecked(service.id)}/>
                                <Text>{service.name} - ${service.price}</Text>
                            </ServiceItemContainer>
                        )}
                    </GroupContainer>
                )}
            </ServiceListContainer>

            <SumContainer>
                {isSumVisible && <Title>Cena końcowa: ${sumOfCheckedServices}</Title>}
            </SumContainer>

            <SubmitButtonContainer>
                <Button disabled={isConfirmButtonDisabled} onClick={() => onSubmitButtonClicked()}>Przejdź dalej</Button>
            </SubmitButtonContainer>
        </MainContainer>
    </ServicesContainerWithNavbar>
}