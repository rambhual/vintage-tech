import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "redux/post/post-actions";

class PostPage extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }
  render() {
    return (
      <div>
        <h4>This is post page!</h4>
        <pre>{JSON.stringify(this.props.posts, null, 4)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPost: () => dispatch(fetchPost())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
