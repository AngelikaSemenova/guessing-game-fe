import React from 'react';
import { Table, TableWrapper, Td, Th, Tr } from './TableStyles';
import { CurrentRoundTableRow } from '../../api';

type TableRowProps = {
  name: string;
  point: number;
  multiplier: number;
  isEven: boolean;
};

const TableRow: React.FC<TableRowProps> = ({
  name,
  point,
  multiplier,
  isEven,
}) => (
  <Tr>
    <Td isEven={isEven}>{name}</Td>
    <Td isEven={isEven}>{point}</Td>
    <Td isEven={isEven}>{multiplier}</Td>
  </Tr>
);

type TableComponentProps = {
  data: CurrentRoundTableRow[];
};

export const TableCurrentRound: React.FC<TableComponentProps> = ({ data }) => (
  <TableWrapper>
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Point</Th>
          <Th>Multiplier</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow
            key={row.name || ''}
            name={row.name || ''}
            point={row.point || 0}
            multiplier={row.multiplier || 0}
            isEven={index % 2 === 0}
          />
        ))}
      </tbody>
    </Table>
  </TableWrapper>
);
