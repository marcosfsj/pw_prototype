import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

function BaseTableHead(props) {

	const {
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort,
		headers
	} = props;

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ 'aria-label': 'Select all desserts' }}
					/>
				</TableCell>
				{headers.map(row => (
					<TableCell
						key={row.id}
						align={row.numeric ? 'right' : 'left'}
						padding={row.disablePadding ? 'none' : 'default'}
						sortDirection={orderBy === row.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === row.id}
							direction={order}
							onClick={createSortHandler(row.id)}
						>
							{row.label}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);

	function createSortHandler(property) {
		return (event) => { onRequestSort(event, property) };
	}

}

BaseTableHead.propTypes = {
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	numSelected: PropTypes.number.isRequired,
	rowCount: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	headers: PropTypes.array.isRequired
};

export default BaseTableHead;
