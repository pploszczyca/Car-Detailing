import useMainPage from "./useMainPage.ts";
import Button from "../../components/Button/Button.tsx";
import logo from "../../assets/images/logo.webp"
import Title from "../../components/Title/Title.tsx";
import {ButtonsContainer, HorizontalLine, LogoImage, TitleContainer} from "./MainPageComponents.tsx";

export function MainPage() {
    const {onMakeAnOrderClicked, onOrdersClicked} = useMainPage()

    return (
        <div>
            <LogoImage src={logo} alt="Logo"/>

            <TitleContainer>
                <HorizontalLine/>
                <Title>GlossWorks Auto Detailing</Title>
                <HorizontalLine/>
            </TitleContainer>

            <ButtonsContainer>
                <Button onClick={onMakeAnOrderClicked}>Umów wizytę w salonie</Button>
                <Button onClick={onOrdersClicked}>Sprawdź swoje wizyty</Button>
            </ButtonsContainer>
        </div>
    )
}