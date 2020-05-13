import React, { useContext } from "react";
import { User } from "./User";
import { Context } from "../../context/context";

const Users = () => {
  // const [state] = useContext(Context);
  // console.log(state);

  // if (!state.currentUser) {
  //   return null;
  // }

  return (
    <div className="container">
      {/* {state.currentUser.map((user) => (
        <User user={user} key={user.uid} />
      ))} */}
    </div>
  );
};

export default Users;
