import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import BaseDataTable from '../../components/base/baseDataTable/BaseDataTable';
import SearchFiltersBar from '../../components/SearchFiltersBar';
import { loadUsers } from '../../store/actions/users-actions';

class PrototypeTwo extends Component {

	state = { showSearchBar: false };
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
}

const mapStateToProps = (state) => {
	return { userList: state.users.userList };
}

export default connect(
	mapStateToProps,
	{ loadUsers }
)(PrototypeTwo);
