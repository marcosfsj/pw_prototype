import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import CommentBox from './comment-box';
import CommentList from './comment-list';
import { loadComments } from '../../store/actions/comments-actions';

class Comments extends Component {

	static propTypes = {};
	static defaultProps = {};

	componentDidMount() {
		this.props.loadComments();
	  }

	render() {
		return (
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<CommentBox />
				</Grid>
				<Grid item xs={12}>
					<CommentList />
				</Grid>
			</Grid>
		);
	}
}

export default connect(null, { loadComments })(Comments);