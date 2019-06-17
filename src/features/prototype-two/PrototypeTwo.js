import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import BaseDataTable from '../../components/base/baseDataTable/BaseDataTable';
import SearchFiltersBar from '../../components/SearchFiltersBar';
import { loadUsers } from '../../store/actions/usersActions';

const headRows = [
	{ id: 'id', numeric: true, disablePadding: true, label: 'Id' },
	{ id: 'name', numeric: false, disablePadding: false, label: 'Name' },
	{ id: 'username', numeric: false, disablePadding: false, label: 'User Name' },
	{ id: 'website', numeric: false, disablePadding: false, label: 'Website' }
];

class PrototypeTwo extends Component {
	constructor(props) {
		super(props);
		this.state = { showSearchBar: false };
	}

	componentDidMount() {
		this.props.loadUsers();
	}

	toggleSearchBar = () => {
		this.setState({ showSearchBar: !this.state.showSearchBar });
	}

	render() {
		return (
			<Grid container spacing={1}>
				<Grid item xs={this.state.showSearchBar === true ? 10 : 12}>
					<BaseDataTable
						title={'Users'}
						headRows={headRows}
						rows={this.props.userList}
						toggleSearchBar={this.toggleSearchBar}
					/>
				</Grid>
				{this.state.showSearchBar === true ?
					(<Grid item xs={2}>
						<SearchFiltersBar />
					</Grid>)
					: null
				}
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return { userList: state.users.userList };
};

export default connect(
	mapStateToProps,
	{ loadUsers }
)(PrototypeTwo);
