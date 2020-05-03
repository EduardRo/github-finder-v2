import React from 'react';

const UserItem = (props) => {
  const { html_url, avatar_url, login, url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=' '
        className='round-img'
        style={{ width: '60px' }}
      ></img>
      <p>
        <a href={url}>{login}</a>
      </p>
      <p>
        <a href={html_url}>{html_url}</a>
      </p>
    </div>
  );
};

export default UserItem;
