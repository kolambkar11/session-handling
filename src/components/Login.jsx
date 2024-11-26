import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Login = () => {
  return (
    <>
      <div className="col-12 col-md-8 mx-auto pt-5">
        <h1 className="text-center">Login</h1>
        <Form className="container">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control placeholder="Enter Email" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <button className="btn btn-danger col-12 ">Login</button>
        </Form>
      </div>
    </>
  );
};

export default Login;
