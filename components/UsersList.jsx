import React from "react";

const UsersList = ({ users, deleteUser, selectUser }) => {
  return (
    <div>
      <ul className="users-list">
        {users.map((user) => (
          <div className="user-card">
            <li key={user.id}>
              <h3>{user.first_name} {user.last_name}</h3>
              <div>
                <b>Email: </b>
                {user.email}
              </div>
              <div>
                <b>Birthday:</b>
                {user.birthday.toString()}
              </div>
              <div className="btn-cards">
                <button onClick={() => selectUser(user)}><i class="fa-regular fa-pen-to-square"></i></button>
                <button onClick={() => deleteUser(user.id)}><i class="fa-solid fa-trash-can"></i></button>
              </div>         
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
