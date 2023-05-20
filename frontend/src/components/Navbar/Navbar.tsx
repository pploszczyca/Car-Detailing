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
  height: 77px;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  font-family: 'Literata',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  color: #FFFFFF;
  margin-right: 64px;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoImage src={logo}/>
            <NavLinks>
                <NavLink to={PathRoutes.ORDERS}>Moje Wizyty</NavLink>
                <NavLink to={PathRoutes.SERVICES}>Umów wizytę</NavLink>
                {/*TODO: Make it run back*/}
                <NavLink to={PathRoutes.MAIN}>Powrót</NavLink>
            </NavLinks>
        </NavbarContainer>
    );
};

export default Navbar;
