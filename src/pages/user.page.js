import React from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { fetchUsers } from "redux/user/user-actions";
import { fetchPost } from "redux/post/post-actions";
import User from "components/User";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPost();
  }

  render() {
    const { users } = this.props;
    return (
      <Container className="mt-2">
        <Row>
          {users.length > 0 &&
            users.map(item => {
              return <User key={item.id} {...item} />;
            })}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPost: () => dispatch(fetchPost())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
