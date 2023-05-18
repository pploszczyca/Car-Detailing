import useMainPage from "./useMainPage.ts";
import Button from "../../components/Button/Button.tsx";

export function MainPage() {
    const {onMakeAnOrderClicked, onOrdersClicked} = useMainPage()

    return (
        <div>
            <Button onClick={onMakeAnOrderClicked}>Umów wizytę w salonie</Button>
            <Button onClick={onOrdersClicked}>Sprawdź swoje wizyty</Button>
        </div>
    )
}