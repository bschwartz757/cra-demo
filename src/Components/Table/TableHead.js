import React from 'react';

const TableHead = props => {
  const columnHeadings = props.columns.map((el, i) => <th key={i}>{el}</th>);

  return (
    <thead>
      <tr>{columnHeadings}</tr>
    </thead>
  );
};

export default TableHead;
