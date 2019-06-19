import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CommentBox from '../../components/comment/CommentBox';
import CommentList from '../../components/comment/CommentList';

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

export default Comments;