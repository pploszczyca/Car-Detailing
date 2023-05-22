import {ServicesContainerWithNavbar} from "../../components/Navbar/ContainerWithNavbar.tsx";
import Title from "../../components/Title/Title.tsx";
import {Dropdown, DropdownArrow, DropdownWrapper} from "../../components/Dropdown/Dropdown.tsx";
import DropdownOption from "../../components/Dropdown/DropdownOption.tsx";

const SelectLocationPage = () => {
    return <ServicesContainerWithNavbar>
        <Title>Hello from SelectLocation!!!</Title>

        <DropdownWrapper>
            <Dropdown>
                <DropdownOption>Option 1</DropdownOption>
                <DropdownOption>Option 2</DropdownOption>
                <DropdownOption>Option 3</DropdownOption>
            </Dropdown>
            <DropdownArrow />
        </DropdownWrapper>
    </ServicesContainerWithNavbar>
}

export default SelectLocationPage