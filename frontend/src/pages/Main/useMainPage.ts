import useRouter from "../../hooks/router/useRouter.ts";

interface UseMainPage {
    onMakeAnOrderClicked: () => void
    onOrdersClicked: () => void
}

const useMainPage = (): UseMainPage => {
    const {goToServices, goToOrders} = useRouter()

    return {
        onMakeAnOrderClicked: goToServices,
        onOrdersClicked: goToOrders,
    }
}

export default useMainPage