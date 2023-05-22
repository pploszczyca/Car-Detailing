import {ServicesContainerWithNavbar} from "../../components/Navbar/ContainerWithNavbar.tsx";
import Title from "../../components/Title/Title.tsx";
import DropdownOption from "../../components/Dropdown/DropdownOption.tsx";
import DropdownComponent from "../../components/Dropdown/Dropdown.tsx";

const SelectLocationPage = () => {
    return <ServicesContainerWithNavbar>
        <Title>Hello from SelectLocation!!!</Title>

        <DropdownComponent width={"50vw"} onOptionChanged={() => {}}>
            <DropdownOption>Option 1</DropdownOption>
            <DropdownOption>Option 2</DropdownOption>
            <DropdownOption>Option 3</DropdownOption>
        </DropdownComponent>
    </ServicesContainerWithNavbar>
}

export default SelectLocationPage