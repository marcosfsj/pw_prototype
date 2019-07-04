import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }

  renderComments = () => {
    return this.props.commentList.map(comment => {
      return <li key={comment.id}>{comment.comment}</li>;
    });
  };
}

const mapStateToProps = state => {
  return { commentList: state.comments.commentList };
};

export default connect(mapStateToProps)(CommentList);
