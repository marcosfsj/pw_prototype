import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import CommentBox from './comment-box';
import CommentList from './comment-list';

class Comments extends Component {

	static propTypes = {};
	static defaultProps = {};

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

export default Comments;