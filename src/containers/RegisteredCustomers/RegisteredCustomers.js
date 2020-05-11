import React from 'react';

export const RegisteredCustomers = () => {
  return (
    <React.Fragment>
      <h3>Registered Customers</h3>
      <p>If you have an account with us, please log in.</p>

      <form>
        <div className="form-group">
          <label htmlFor="email">Email adress</label>
          <input className="form-control" type="text" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" name="password" />
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Login
        </button>
      </form>
    </React.Fragment>
  );
};
