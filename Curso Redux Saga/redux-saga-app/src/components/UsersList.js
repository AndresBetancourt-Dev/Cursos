import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const UsersList = ({ users, onDeleteUser }) => {
  return (
    <ListGroup>
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) return 1;
          if (a.firstName < b.firstName) return -1;
          if (a.lastName > b.lastName) return 1;
          if (a.lastName < b.lastName) return -1;
          return 0;
        })
        .map(({ id, firstName, lastName }) => (
          <ListGroupItem key={id}>
            <section style={{ display: "flex" }}>
              <div style={{ flexGrow: 1, margin: "auto 0" }}>
                {firstName} {lastName}
              </div>
              <div>
                <Button outline color="danger" onClick={() => onDeleteUser(id)}>
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default UsersList;
