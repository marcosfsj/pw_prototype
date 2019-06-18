import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

export default function BaseTableBody(props) {
	return (
		<TableBody>
			{stableSort(props.rows, getSorting(props.order, props.orderBy))
				.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
				.map((row, index) => {

					const isItemSelected = props.isSelected(row.name);
					const labelId = `table-checkbox-${index}`;

					return (
						<TableRow
							hover
							onClick={event => props.handleClick(event, row.name)}
							role="checkbox"
							aria-checked={isItemSelected}
							tabIndex={-1}
							key={row.name}
							selected={isItemSelected}
						>
							<TableCell padding="checkbox">
								<Checkbox
									checked={isItemSelected}
									inputProps={{ 'aria-labelledby': labelId }}
								/>
							</TableCell>
							{renderCells(props, row)}
						</TableRow>
					);
				})}
			{props.emptyRows > 0 && (
				<TableRow style={{ height: 49 * props.emptyRows }}>
					<TableCell colSpan={6} />
				</TableRow>
			)}
		</TableBody>
	);
}

function renderCells(props, row) {
	return (
		props.headRows.map(header => (
			<TableCell align={header.numeric ? 'right' : 'left'} padding={header.numeric ? 'none' : 'default'}>
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