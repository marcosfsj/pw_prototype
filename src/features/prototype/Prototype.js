import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import BaseDataTable from '../../components/base/BaseSimpleDataTable';
import ButtonBar from '../../components/ButtonBar';
import { loadUsers } from '../../store/actions/usersActions';

class Prototype extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <BaseDataTable rows={this.props.userList} />
        </Grid>
        <Grid item xs={12}>
          <ButtonBar />
        </Grid>
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
)(Prototype);
