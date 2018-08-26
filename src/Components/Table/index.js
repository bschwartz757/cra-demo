import React from 'react';
import { Table } from 'reactstrap';

import TableBody from './TableBody';
import TableHead from './TableHead';

const TableComponent = props => {
  console.log('props: ', props);

  return (
    <Table responsive>
      <TableHead />
      <TableBody />
    </Table>
  );
};

export default TableComponent;
