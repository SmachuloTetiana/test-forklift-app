import React from 'react';

export const User = ({ user }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h3 className="title">{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
