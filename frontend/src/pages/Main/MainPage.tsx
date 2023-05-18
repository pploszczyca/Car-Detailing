import useMainPage from "./useMainPage.ts";
import Button from "../../components/Button/Button.tsx";
import logo from "../../assets/images/logo.png"

export function MainPage() {
    const {onMakeAnOrderClicked, onOrdersClicked} = useMainPage()

    return (
        <div>
            <img src={logo} alt="Logo"/>
            <Button onClick={onMakeAnOrderClicked}>Umów wizytę w salonie</Button>
            <Button onClick={onOrdersClicked}>Sprawdź swoje wizyty</Button>
        </div>
    )
}