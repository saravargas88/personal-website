import { Container, Row, Col, Card } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <Container fluid className="py-5">
      <h1 className="text-center mb-4">Contact Me</h1>
      <Row className="justify-content-center">
        {/* Email Card */}
        <Col md={5} className="mb-3">
          <Card className="shadow-sm border-0 h-100 text-center">
            <Card.Body>
              <AiOutlineMail size={40} className="mb-3 text-primary" />
              <Card.Title>Email</Card.Title>
              <Card.Text>
                You can reach me at{" "}
                <a href="mailto:ql2221@nyu.edu">ql2221@nyu.edu</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* GitHub Card */}
        <Col md={5} className="mb-3">
          <Card className="shadow-sm border-0 h-100 text-center">
            <Card.Body>
              <AiFillGithub size={40} className="mb-3 text-dark" />
              <Card.Title>GitHub</Card.Title>
              <Card.Text>
                You can find my projects on{" "}
                <a href="https://github.com/QiLiu6" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}