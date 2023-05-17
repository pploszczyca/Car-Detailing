import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import ServicesPage from "./pages/Services/ServicesPage.tsx";
import OrdersPage from "./pages/Orders/OrdersPage.tsx";
import MainPage from "./pages/Main/MainPage.tsx";
import {Routes} from "./hooks/router/routes.ts";

function App() {
    return (
        <Router>
            <Route path={Routes.SERVICES} element={<ServicesPage/>}/>
            <Route path={Routes.ORDERS} element={<OrdersPage/>}/>
            <Route path={Routes.MAIN} element={<MainPage/>}/>
        </Router>
    )
}

export default App
