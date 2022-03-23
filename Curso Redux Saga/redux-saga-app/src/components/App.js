import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "reactstrap";
import {
  createUserRequest,
  deleteUserRequest,
  getUsersRequest,
  usersError,
} from "../actions/users";
import NewUserForm from "./NewUserForm";
import UsersList from "./UsersList";

function App() {
  const users = useSelector((state) => state.users.items);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  const handleSubmit = ({ firstName, lastName }) => {
    dispatch(createUserRequest({ firstName, lastName }));
  };

  const handleDelete = (id) => {
    dispatch(deleteUserRequest(id));
  };

  const handleCloseAlert = () => {
    dispatch(usersError({ error: "" }));
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <Alert color="danger" isOpen={Boolean(error)} toggle={handleCloseAlert}>
        {error}
      </Alert>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={users} onDeleteUser={handleDelete} />
    </div>
  );
}

export default App;
