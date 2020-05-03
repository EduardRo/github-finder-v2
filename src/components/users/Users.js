import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner/Spinner';

class Users extends Component {
  render() {
    return this.props.loading ? (
      <Spinner />
    ) : (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
