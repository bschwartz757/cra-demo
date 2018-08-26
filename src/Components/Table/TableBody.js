import React from 'react';

const TableBody = props => {
  const rowData = props.data.map((row, i) => {
    const tableCells = Object.keys(row).map((key, index) => {
      return <td key={index}>{row[key]}</td>;
    });

    return <tr key={i}>{tableCells}</tr>;
  });

  return <tbody>{rowData}</tbody>;
};

export default TableBody;
