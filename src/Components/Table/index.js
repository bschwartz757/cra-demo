import React from 'react';
import { Table } from 'reactstrap';

import CardComponent from '../Card';

import TableBody from './TableBody';
import TableHead from './TableHead';

const TableComponent = props => {
  return (
    <CardComponent title={props.title}>
      <Table responsive hover>
        <TableHead columns={props.columns} />
        <TableBody data={props.data} />
      </Table>
    </CardComponent>
  );
};

export default TableComponent;
