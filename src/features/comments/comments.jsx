import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import CommentBox from './comment-box';
import CommentList from './comment-list';

const propTypes = {};
const defaultProps = {};

class Comments extends Component {
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

Comments.propTypes = propTypes;
Comments.defaultProps = defaultProps;

export default Comments;