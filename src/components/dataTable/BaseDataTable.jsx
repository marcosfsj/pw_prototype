import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';

import BaseDataTableBody from './BaseDataTableBody';
import BaseDataTableHead from './BaseDataTableHead';
import BaseDataTablePagination from './BaseDataTablePagination';
import BaseDataTableToolBar from './BaseDataTableToolBar';

function BaseDataTable(props) {

  const {
    title,
    headers,
    rows,
    pagination,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    toggleSearchBar
  } = props;

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const isSelected = id => selected.indexOf(id) !== -1;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <BaseDataTableToolBar numSelected={selected.length} toggleSearchBar={toggleSearchBar} title={title} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'small'}
          >
            <BaseDataTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headers={headers}
            />
            <BaseDataTableBody
              handleClick={handleClick}
              isSelected={isSelected}
              rows={rows}
              order={order}
              orderBy={orderBy}
              headers={headers}
              rowsPerPage={rowsPerPage}
            />
          </Table>
        </div>
        <BaseDataTablePagination
          pagination={pagination}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = rows.map(row => row.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  }
}

BaseDataTable.propTypes = {
  title: PropTypes.string.isRequired,
  headers: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  toggleSearchBar: PropTypes.func.isRequired
}

export default BaseDataTable;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(0)
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: 'auto'
  },
}));