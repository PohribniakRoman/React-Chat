import { Button } from "react-bootstrap";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../ENDPOINTS";

export default function Login() {
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
              fetch(ENDPOINTS.host + ENDPOINTS.login, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({name:"Roman",password:"1111"}),
              });
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
            <Link to="/register">Don't have an account?</Link> <br />
            <Button variant="primary" className="mt-3" type="submit" size="md">
              Sign in
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
