import React, { Component } from 'react';
import { connect } from 'react-redux';

import BaseTextArea from '../../components/base/BaseTextArea';
import SubmitButton from '../../components/buttons/SubmitButton';
import { saveComment } from '../../store/actions/comments-actions';

const propTypes = {};
const defaultProps = {};

class CommentBox extends Component {
	state = { comment: '' };

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<h5>Add a Comment</h5>
				</div>
				<div>
					<BaseTextArea
						onChange={this.handleChange}
						value={this.state.comment}
					/>
				</div>
				<div>
					<SubmitButton handleSubmit={this.handleSubmit} />
				</div>
			</form>
		);
	}

	handleChange = (event) => {
		this.setState({ comment: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.saveComment({ comment: 'new comment' });
		this.setState({ comment: '' });
	};
}

CommentBox.propTypes = propTypes;
CommentBox.defaultProps = defaultProps;

export default connect(null, { saveComment })(CommentBox);