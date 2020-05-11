import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../store/actions';
import { authRef } from '../../firebase';

const NewCustomers = ({ myUsers, createUser }) => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    password: ''
  });

  const changeInputHandler = event => {
    event.preventDefault();
    setCustomer({
      ...customer,
      [event.target.name]: event.target.value
    });
  };

  const submitHandler = async event => {
    event.preventDefault();

    const { email, password } = customer;

    try {
      const res = await authRef.createUserWithEmailAndPassword(email, password);
      createUser(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <React.Fragment>
      <h3>New Customers</h3>
      <p>
        By creating an account with our store, you will be able to move through
        the checkout process faster, store multiple shipping addresses, view and
        track your orders in your account and more.
      </p>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={customer.name}
            onChange={changeInputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email adress</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={customer.email}
            onChange={changeInputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={customer.password}
            onChange={changeInputHandler}
          />
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Create an account
        </button>
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  myUsers: state.users.users
});

const mapDispatchToProps = {
  createUser
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomers);
