import React from 'react';

const TableBody = props => {
  const rowData = props.data.map((row, i) => {
    const tableCells = Object.keys(row).map((key, index) => {
      let cellColor = 'table-default';
      // We only want to differentiate cell color if we're in the second table.
      // Since we're sharing a table component, we need to make sure we only
      // run this operation on rows that contain the CHANGE & CHANGE_ERROR keys
      if (row.CHANGE && row.CHANGE_ERROR && key === 'CHANGE') {
        // make sure we're dealing with actual numbers (not numbers as strings)
        const change = Number(row.CHANGE);
        const changeError = Number(row.CHANGE_ERROR);

        // If CHANGE is positive and greater than CHANGE_ERROR, then set the cell color of CHANGE to green.
        // If CHANGE is negative and absolute value is greater than CHANGE_ERROR, then set the cell color of CHANGE to red.
        cellColor =
          change > 0 && change > changeError
            ? 'table-success'
            : change < 0 && Math.abs(change) > changeError
              ? 'table-danger'
              : cellColor;
      }

      return (
        <td key={index} className={cellColor}>
          {row[key]}
        </td>
      );
    });

    return <tr key={i}>{tableCells}</tr>;
  });

  return <tbody>{rowData}</tbody>;
};

export default TableBody;
