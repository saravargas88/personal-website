

import { Container, Row, Col } from "react-bootstrap";
import resumePDF from "/resume.pdf"

export default function Resume() {
  return (
    <Container fluid className="my-5">
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h1>Resume</h1>

          {/* PDF preview */}
          <iframe
            src={resumePDF}
            width="100%"
            height="600px"
            style={{ border: "none" }}
            title="Resume PDF"
          />
        </Col>
      </Row>
    </Container>
  );
}