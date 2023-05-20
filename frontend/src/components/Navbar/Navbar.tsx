import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {PathRoutes} from "../../hooks/router/pathRoutes.ts";
import logo from "../../assets/images/logo-small.webp"

const NavbarContainer = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 77px;
  background-color: rgba(47, 46, 65, 0.9);
  margin: 0;
  top: 0;
  z-index: 1;
`;

const LogoImage = styled.img`
  height: 66px;
  padding-left: 18px;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  font-family: 'Literata', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #FFFFFF;
  margin-right: 64px;
  text-decoration: none;
`;

interface NavbarProperties {
    shouldShowOrdersOption: boolean
    shouldShowServicesOption: boolean
}

const Navbar = (
    {shouldShowOrdersOption, shouldShowServicesOption}: NavbarProperties
) =>
    (
        <NavbarContainer>
            <Link to={PathRoutes.MAIN}>
                <LogoImage src={logo}/>
            </Link>
            <NavLinks>
                {shouldShowOrdersOption && <NavLink to={PathRoutes.ORDERS}>Moje Wizyty</NavLink>}
                {shouldShowServicesOption && <NavLink to={PathRoutes.SERVICES}>Umów wizytę</NavLink>}
                <NavLink to={PathRoutes.MAIN}>Powrót</NavLink>
            </NavLinks>
        </NavbarContainer>
    );

export default Navbar;
