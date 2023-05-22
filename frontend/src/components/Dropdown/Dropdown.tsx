import styled from 'styled-components';
import React, { useState } from 'react';

const DropdownWrapper = styled.div<{ width: string }>`
  position: relative;
  display: inline-block;
  width: ${({ width }) => width};
`;

const Dropdown = styled.select<{ isOpen: boolean }>`
  background: rgba(249, 168, 38, 0.15);
  border: 1px solid #F9A826;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  appearance: none;
  padding: 2px;
  width: 100%;

  font-family: 'Literata', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  color: #000000;
`;

const DropdownArrow = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%) ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  pointer-events: none;
  background: #F9A826;
  width: 32px;
  height: 32px;
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
`;

interface Props {
    onOptionChanged: (value: string) => void;
    children: React.ReactNode;
    width: string;
}

export const DropdownComponent: React.FC<Props> = ({ onOptionChanged, width, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onOptionChanged(event.target.value);
    };

    return (
        <DropdownWrapper onClick={handleToggle} width={width}>
            <Dropdown onChange={handleChange} isOpen={isOpen}>
                {children}
            </Dropdown>
            <DropdownArrow isOpen={isOpen} />
        </DropdownWrapper>
    );
};

export default DropdownComponent;
