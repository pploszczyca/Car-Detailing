import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Dropdown = styled.select`
  background: rgba(249, 168, 38, 0.15);
  border: 1px solid #F9A826;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  appearance: none;
  padding: 10px;
  width: 100%;

  font-family: 'Literata', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  color: #000000;
`;

export const DropdownArrow = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  background: #F9A826;
  width: 32px;
  height: 32px;
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
`;
