import { Button } from "react-bootstrap";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Container>
      <Row
        className="justify-content-md-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Col md="4">
          <h1 className="mb-3">React Chat</h1>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <FloatingLabel controlId="login" label="login" className="mb-4">
              <Form.Control type="login" placeholder="login" required />
            </FloatingLabel>
            <FloatingLabel
              controlId="password"
              label="Password"
              className="mb-1"
            >
              <Form.Control type="password" placeholder="Password" required />
            </FloatingLabel>
            <Link to="/login">Already have an account?</Link> <br />
            <Button variant="primary" className="mt-3" type="submit" size="md">
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
