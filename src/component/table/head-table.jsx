import PropTypes from 'prop-types';

import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

// ----------------------------------------------------------------------

export default function HeadTable({
  headLabel,
}) {

  return (
    <TableHead>
      <TableRow>

        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            sx={{ backgroundColor: '#b6ccb3', fontWeight: 'bolder' }}
          >
            <TableSortLabel
              hideSortIcon
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

HeadTable.propTypes = {
  headLabel: PropTypes.array
};
