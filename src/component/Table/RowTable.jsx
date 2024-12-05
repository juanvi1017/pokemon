import * as React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';


// ----------------------------------------------------------------------

export default function RowTable({
  name,
  view
}) {

  const data = (value) => {
    view(value)
  }

  return (
    <>
      <TableRow hover tabIndex={-1}>

        <TableCell align='center' component="th" scope="row" onClick={() => data(name)}>
          <Typography variant="subtitle2" noWrap>
            {name.toUpperCase()}
          </Typography>
        </TableCell>

      </TableRow>
    </>
  );
}

RowTable.propTypes = {
  name: PropTypes.string,
  view: PropTypes.any
};
