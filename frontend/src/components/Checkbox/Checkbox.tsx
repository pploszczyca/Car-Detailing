import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #F9A826;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  &:checked {
    background: #F9A826;
  }

  &:checked::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background: white;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2px;
  }
`;

export default Checkbox;
