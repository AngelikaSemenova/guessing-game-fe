import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  min-height: 100vh;
  padding: 20px;
  font-family: ${(props) => props.theme.fonts.main};
  margin: 0;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  gap: 24px;
`;

export const BadgeWrapper = styled.div`
  width: 100%;
`;

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 24px;
`;

export const ContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ContainerInsertWrapper = styled.div`
  background-color: #212531;
  border: 1px solid #242834;
  border-radius: 8px;
  height: 100%;
  padding: 18px;
`;
