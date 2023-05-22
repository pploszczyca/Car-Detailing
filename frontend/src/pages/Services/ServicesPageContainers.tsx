import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
`;

export const GroupContainer = styled.div`
  margin-left: 16px;
`;

export const ServiceItemContainer = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    margin-left: 40px;
`;

export const ServiceListContainer = styled.div`
  height: calc(100vh - 77px);
  overflow-y: auto;
  overflow-x: hidden;
  margin-left: 92px;
  flex: 2;
`;

export const SumContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;  // Center horizontally
  align-items: center;  // Center vertically
  height: calc(100vh - 77px);
`;

export const SubmitButtonContainer = styled.div`
  position: absolute;
  bottom: 38px;
  right: 38px;
`;