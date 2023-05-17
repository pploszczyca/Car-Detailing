import {Routes} from "./routes.ts";
import {useNavigate} from "react-router-dom";

interface UseRouter {
    goToMain: () => void
    goToServices: () => void
    goToOrders: () => void
}

export default (): UseRouter => {
    const navigate = useNavigate()

    return {
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