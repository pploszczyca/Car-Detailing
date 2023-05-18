import './App.css'
import {Routes, Route} from "react-router-dom";
import {PathRoutes} from "./hooks/router/pathRoutes.ts";
import {MainPage} from "./pages/Main/MainPage.tsx";
import {ServicesPage} from "./pages/Services/ServicesPage.tsx";
import {OrdersPage} from "./pages/Orders/OrdersPage.tsx";


function App() {
    return (
        <Routes>
            <Route path={PathRoutes.SERVICES} element={<ServicesPage/>}/>
            <Route path={PathRoutes.ORDERS} element={<OrdersPage/>}/>
            <Route path={PathRoutes.MAIN} element={<MainPage/>}/>
        </Routes>
    )
}

export default App
