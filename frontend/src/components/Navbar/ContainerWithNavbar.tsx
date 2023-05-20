import React from "react";
import Navbar from "./Navbar.tsx";

interface ContainerWithNavbarProperties {
    shouldShowOrdersOption: boolean
    shouldShowServicesOption: boolean
    children: React.ReactNode
}

const ContainerWithNavbar = (
    {shouldShowOrdersOption, shouldShowServicesOption, children}: ContainerWithNavbarProperties
) =>
    <div>
        <Navbar shouldShowOrdersOption={shouldShowOrdersOption} shouldShowServicesOption={shouldShowServicesOption}/>
        <div style={{marginTop: '77px'}}>
            {children}
        </div>
    </div>

interface ContainerProperties {
    children: React.ReactNode
}

export const OrdersContainerWithNavbar = ({children}: ContainerProperties) =>
    <ContainerWithNavbar shouldShowOrdersOption={false} shouldShowServicesOption={true} children={children}/>

export const ServicesContainerWithNavbar = ({children}: ContainerProperties) =>
    <ContainerWithNavbar shouldShowOrdersOption={true} shouldShowServicesOption={false} children={children}/>