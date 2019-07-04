import React, { Component } from 'react';
import { connect } from 'react-redux';

import BaseTextArea from '../../components/inputs/TextAreaInput';
import SubmitButton from '../../components/buttons/SubmitButton';
import { saveComment } from '../../store/actions/commentActions';

class CommentBox extends Component {
  state = { comment: '' };

  static propTypes = {};
  static defaultProps = {};

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

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveComment({
      id: 1,
      comment: this.state.comment
    });
    this.setState({ comment: '' });
  };
}

export default connect(
  null,
  { saveComment }
)(CommentBox);
