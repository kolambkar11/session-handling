import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

const Register = () => {
  return (
    <>
      <div className="col-12 col-md-8 mx-auto pt-5">
        <h1 className="text-center">Registration</h1>
        <Form className="container">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email:
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
              Password:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Re-Enter Password:
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Re-Enter Password" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Security Question:
            </Form.Label>
            <Col sm="10">
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Your Pet's Name?
                </InputGroup.Text>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
            </Col>
          </Form.Group>

          <button className="btn col-12 btn-success">Register</button>
        </Form>
      </div>
    </>
  );
};

export default Register;
