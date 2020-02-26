import React from "react";

import { saveComment, fetchComments } from "../actions/index";
import { connect } from "react-redux";

class CommentBox extends React.Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props);

    //call an action creator
    this.props.saveComment(this.state.comment);

    //save the comment
    this.setState({
      comment: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comment" onClick={this.props.fetchComment}>
          Fetch Comment
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveComment: comment => dispatch(saveComment(comment)),
  fetchComment: () => dispatch(fetchComments())
});

export default connect(null, mapDispatchToProps)(CommentBox);
