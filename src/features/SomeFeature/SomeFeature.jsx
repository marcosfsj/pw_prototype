import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import BaseDataTable from '../../components/dataTable/BaseDataTable';
import SearchFiltersBar from '../../components/bars/SearchFiltersBar';
import { loadUsers } from '../../store/actions/userActions';

class SomeFeature extends Component {

	state = { showSearchBar: false, page: 1, rowsPerPage: 15 };
	headers = [
		{ id: 'id', numeric: true, disablePadding: true, label: 'Id' },
		{ id: 'name', numeric: false, disablePadding: false, label: 'Name' },
		{ id: 'username', numeric: false, disablePadding: false, label: 'User Name' },
		{ id: 'website', numeric: false, disablePadding: false, label: 'Website' }
	];

	componentDidMount() {
		this.props.loadUsers();
	}

	render() {
		return (
			<Grid container spacing={1}>
				<Grid item xs={this.state.showSearchBar === true ? 10 : 12}>
					<BaseDataTable
						title={'Users'}
						headers={this.headers}
						rows={this.props.userList}
						pagination={this.props.userListPagination}
						page={this.state.page}
						rowsPerPage={this.state.rowsPerPage}
						handleChangePage={this.handleChangePage}
						handleChangeRowsPerPage={this.handleChangeRowsPerPage}
						toggleSearchBar={this.toggleSearchBar}
					/>
				</Grid>
				{
					this.state.showSearchBar === true
						? (
							<Grid item xs={2}>
								<SearchFiltersBar />
							</Grid>
						)
						: null
				}
			</Grid>
		);
	}

	toggleSearchBar = () => {
		this.setState({ showSearchBar: !this.state.showSearchBar });
	}

	handleChangePage = (newPage) => {
		this.props.loadUsers(newPage, this.rowsPerPage);
		this.setState({ page: newPage });
	}

	handleChangeRowsPerPage = (newRowsPerPage) => {
		this.props.loadUsers(this.page, newRowsPerPage);
	}

}

const mapStateToProps = (state) => {
	return { 
		userList: state.users.userList, 
		userListPagination: state.users.userListPagination
	};
}

export default connect(
	mapStateToProps,
	{ loadUsers }
)(SomeFeature);
