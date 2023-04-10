import styled from 'styled-components';

export const TableWrapper = styled.div`
  border: 1px solid rgb(25, 28, 35);
  border-radius: 6px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  font-weight: bold;
  padding: 10px;
  text-align: left;
  background-color: #15181f;
  font-size: small;
  color: #838793;
`;

export const Td = styled.td<{ isEven: boolean }>`
  padding: 10px;
  font-size: 14px;
  background-color: ${(props) => (props.isEven ? '#242833' : '#1a1e27')};
`;

export const Tr = styled.tr`
  &:first-child td {
    background-color: #404558; // фон первой ячейки
  }
`;
