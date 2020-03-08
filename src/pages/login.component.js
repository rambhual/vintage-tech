import React from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
const Login = () => {
  const onSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <Row className="mt-3">
      <Col md={{ size: 4, offset: 4 }}>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
              type="email"
              name="username"
              placeholder="You must enter your email"
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="You must enter your password"
            />
          </FormGroup>
          <Button className="btn-sm" type="submit">
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default Login;
