import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import ButtonsBar from '../../components/ButtonsBar';
import { loadUsers } from '../../store/actions/users-actions';
import BaseTextField from '../../components/base/BaseTextField';

class Prototype extends Component {

  static propTypes = {};
  static defaultProps = {};

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <ButtonsBar />
        </Grid>
        <Grid item xs={12}>
          <BaseTextField label="Name" />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return { userList: state.users.userList };
}

export default connect(
  mapStateToProps,
  { loadUsers }
)(Prototype);
