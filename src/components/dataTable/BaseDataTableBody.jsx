import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

function BaseTableBody(props) {

	const {
		rows,
		order,
		orderBy,
		isSelected,
		handleClick,
		headers,
		rowsPerPage
	} = props;

	const emptyRows = rowsPerPage - rows.length;

	return (
		<TableBody>
			{stableSort(rows, getSorting(order, orderBy))
				.map((row, index) => {

					const isItemSelected = isSelected(row.id);
					const labelId = `table-checkbox-${index}`;

					return (
						<TableRow
							hover
							onClick={event => handleClick(event, row.id)}
							role="checkbox"
							aria-checked={isItemSelected}
							tabIndex={-1}
							key={row.id}
							selected={isItemSelected}
						>
							<TableCell padding="checkbox">
								<Checkbox
									checked={isItemSelected}
									inputProps={{ 'aria-labelledby': labelId }}
								/>
							</TableCell>
							{renderCells(row)}
						</TableRow>
					);
				})}
			{emptyRows > 0 && (
				<TableRow style={{ height: 33 * emptyRows }}>
					<TableCell colSpan={6} />
				</TableRow>
			)}
		</TableBody>
	);

	function renderCells(row) {
		return (
			headers.map(header => (
				<TableCell key={header.id + row.id} align={header.numeric ? 'right' : 'left'} padding={header.numeric ? 'none' : 'default'}>
					{row[header.id]}
				</TableCell>
			))
		);
	}

	function stableSort(array, cmp) {
		const stabilizedThis = array.map((el, index) => [el, index]);
		stabilizedThis.sort((a, b) => {
			const order = cmp(a[0], b[0]);
			if (order !== 0) return order;
			return a[1] - b[1];
		});
		return stabilizedThis.map(el => el[0]);
	}

	function getSorting(order, orderBy) {
		return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
	}

	function desc(a, b, orderBy) {
		if (b[orderBy] < a[orderBy]) {
			return -1;
		}
		if (b[orderBy] > a[orderBy]) {
			return 1;
		}
		return 0;
	}

}

BaseTableBody.propTypes = {
	rows: PropTypes.array.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	isSelected: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	headers: PropTypes.array.isRequired,
	rowsPerPage: PropTypes.number.isRequired
};

export default BaseTableBody;


