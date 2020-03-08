import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";
const User = ({ name, email }) => {
  return (
    <Col className="col-12 col-md-4 mt-1">
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{email}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};

export default User;
