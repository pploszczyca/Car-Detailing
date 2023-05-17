import {useNavigation} from "react-navigation-hooks";
import {Routes} from "./routes.ts";

interface UseRouter {
    goBack: () => void
    goToMain: () => void
    goToServices: () => void
    goToOrders: () => void
}

export default (): UseRouter => {
    const {navigate, goBack} = useNavigation()

    return {
        goBack: () => {
            goBack()
        },
        goToMain: () => {
            navigate(Routes.MAIN)
        },
        goToServices: () => {
            navigate(Routes.SERVICES)
        },
        goToOrders: () => {
            navigate(Routes.ORDERS)
        }
    }
}