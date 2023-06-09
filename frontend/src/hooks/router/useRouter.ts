import {PathRoutes} from "./pathRoutes.ts";
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
            navigate(PathRoutes.MAIN)
        },
        goToServices: () => {
            navigate(PathRoutes.SERVICES)
        },
        goToOrders: () => {
            navigate(PathRoutes.ORDERS)
        }
    }
}