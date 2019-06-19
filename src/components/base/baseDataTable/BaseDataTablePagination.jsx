import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';

export default function BaseDataTablePagination(props) {
	return (
		<TablePagination
			rowsPerPageOptions={[10, 200, 300]}
			component="div"
			count={props.count}
			rowsPerPage={props.rowsPerPage}
			page={props.page}
			backIconButtonProps={{
				'aria-label': 'Previous Page',
			}}
			nextIconButtonProps={{
				'aria-label': 'Next Page',
			}}
			onChangePage={props.handleChangePage}
			onChangeRowsPerPage={props.handleChangeRowsPerPage}
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
