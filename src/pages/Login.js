import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticated }) => {
  const naviagte = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    console.log(`login user function issue`);
    setAuthenticated(true);
    naviagte("/");
  };

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          loginUser(event);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="id" placeholder="ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>패스워드</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
