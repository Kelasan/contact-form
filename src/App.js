import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AllUsers from "./components/AllUsers";
import AddUserForm from "./components/AddUserForm";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap/dist/react-bootstrap";

function App() {
  const [users, setUsers] = useState([
    { name: "Kelvin", contact: 241547807, location: "Taifa" },
    { name: "Asante", contact: 507062749, location: "Burkina" },
  ]);
  const addNewUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <AddUserForm newUser={addNewUser} />
        </Col>
        <Col>
          <AllUsers userData={users} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
