import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { User } from './User';
import { Context } from '../../context/context';
import { fetchedUsers } from '../../store/actions';

const Users = ({ myFetchUsers, fetchedUsers }) => {
  const { url } = useContext(Context);

  const fetchAllUsers = async () => {
    const res = await axios.get(`${url}/users.json`);

    const payload = Object.keys(res.data).map(key => ({
      ...res.data[key],
      id: key
    }));

    fetchedUsers(payload);
  };

  useEffect(() => {
    fetchAllUsers();
    // eslint-disable-next-line
  }, []);

  if (!myFetchUsers) {
    return null;
  }

  return (
    <div className="container">
      {!myFetchUsers.length ? (
        <p>No users</p>
      ) : (
        myFetchUsers.map(user => <User user={user} key={user.id} />)
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  myFetchUsers: state.users.fetchedUsers
});

const mapDispatchToProps = {
  fetchedUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
