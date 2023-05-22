import styled from 'styled-components';

const Dropdown = styled.select`
  background: rgba(249, 168, 38, 0.15);
  border: 1px solid #F9A826;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  appearance: none;
  padding: 10px;

  &:after {
    content: '▼';
    font-size: 10px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%) matrix(-1, -0.02, -0.02, 1, 0, 0);
    pointer-events: none;
    background: #F9A826;
    border-radius: 3px;
    padding: 2px;
  }

  font-family: 'Literata',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  color: #000000;
`;

export default Dropdown;
