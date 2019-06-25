import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';

function BaseDataTablePagination(props) {

	const {
		count,
		rowsPerPage,
		page,
		handleChangePage,
		handleChangeRowsPerPage
	} = props;

	return (
		<TablePagination
			rowsPerPageOptions={[10, 200, 300]}
			component="div"
			count={count}
			rowsPerPage={rowsPerPage}
			page={page}
			backIconButtonProps={{
				'aria-label': 'Previous Page',
			}}
			nextIconButtonProps={{
				'aria-label': 'Next Page',
			}}
			onChangePage={handleChangePage}
			onChangeRowsPerPage={handleChangeRowsPerPage}
		/>
	);
}

BaseDataTablePagination.propTypes = {
	count: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	handleChangePage: PropTypes.func.isRequired,
	handleChangeRowsPerPage: PropTypes.func.isRequired
};

export default BaseDataTablePagination;
