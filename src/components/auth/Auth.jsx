import { Button } from "react-bootstrap";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../ENDPOINTS";
import SendData from "../../hooks/SendData";

export default function Register() {
  const navigate = useNavigate();
  return (
    <Container>
      <Row
        className="justify-content-md-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Col md="4">
          <h1 className="mb-3">React Chat</h1>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              const resp = await (await SendData(ENDPOINTS.HOST + ENDPOINTS.REGISTER,{name:e.target.login.value.toLowerCase(),password:e.target.password.value.toLowerCase()})).json()
              if(resp.authorized){
                navigate("../login",{replace:true})
              }
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
