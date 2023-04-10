import React from 'react';
import { Table, TableWrapper, Td, Th, Tr } from './TableStyles';
import { RankingTableRow } from '../../api';

export type RowDataRanking = [number, string, number];

type TableRowProps = {
  name: string;
  score: number;
  isEven: boolean;
};

const TableRow: React.FC<TableRowProps> = ({ name, score, isEven }) => (
  <Tr>
    <Td isEven={isEven}>{name}</Td>
    <Td isEven={isEven}>{score}</Td>
  </Tr>
);

type TableComponentProps = {
  data: RankingTableRow[];
};

export const TableRanking: React.FC<TableComponentProps> = ({ data }) => (
  <TableWrapper>
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Score</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow
            key={row.name || ''}
            name={row.name || ''}
            score={row.score || 0}
            isEven={index % 2 === 0}
          />
        ))}
      </tbody>
    </Table>
  </TableWrapper>
);
