import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

function BaseDataTablePagination(props) {

  const {
	pagination,
	page,
	rowsPerPage,
	handleChangePage,
	handleChangeRowsPerPage
  } = props;

  const theme = useTheme();

  function handleFirstPageButtonClick(event) {
    handleChangePage(parseInt(pagination.first._page));
  }

  function handlePreviousButtonClick(event) {
    handleChangePage(parseInt(pagination.prev._page));
  }

  function handleNextButtonClick(event) {
    handleChangePage(parseInt(pagination.next._page));
  }

  function handleLastPageButtonClick(event) {
    handleChangePage(parseInt(pagination.last._page));
  }

  return (
    <React.Fragment>
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
			disabled={pagination.last && parseInt(pagination.last._page) === page}
			aria-label="Last Page"
		>
			{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
		</IconButton>
	</React.Fragment>
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

  