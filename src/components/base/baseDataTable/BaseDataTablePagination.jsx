import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

function BaseDataTablePagination(props) {
  const classes = useStyles();

  const {
	pagination,
	page,
	rowsPerPage,
	handleChangePage,
	handleChangeRowsPerPage
  } = props;

  const theme = useTheme();

  function handleFirstPageButtonClick(event) {
    handleChangePage(pagination.first._page);
  }

  function handlePreviousButtonClick(event) {
    handleChangePage(pagination.prev._page);
  }

  function handleNextButtonClick(event) {
    handleChangePage(pagination.next._page);
  }

  function handleLastPageButtonClick(event) {
    handleChangePage(pagination.last._page);
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableFooter>
            <TableRow>
				<div className={classes.action}>
					<IconButton
						onClick={handleFirstPageButtonClick}
						disabled={page === 1}
						aria-label="First Page"
					>
						{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
					</IconButton>

					<IconButton 
						onClick={handlePreviousButtonClick} 
						disabled={!pagination.prev} 
						aria-label="Previous Page"
					>
						{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
					</IconButton>

					{page}

					<IconButton
						onClick={handleNextButtonClick}
						disabled={!pagination.next}
						aria-label="Next Page"
					>
						{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</IconButton>

					<IconButton
						onClick={handleLastPageButtonClick}
						disabled={pagination.last && pagination.last._page === page}
						aria-label="Last Page"
					>
						{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
					</IconButton>
				</div>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  );
}

BaseDataTablePagination.propTypes = {
	pagination: PropTypes.object.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired
}

export default BaseDataTablePagination;

const useStyles = makeStyles(theme => ({
	root: {
	  width: '100%',
	  marginTop: theme.spacing(3),
	},
	table: {
	  minWidth: 500,
	},
	tableWrapper: {
	  overflowX: 'auto',
	},
	action: {
	  flexShrink: 0,
	  color: theme.palette.text.secondary,
	  marginLeft: theme.spacing(2.5),
	},
  }));
  