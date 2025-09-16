/*
Component defintino script for FOOTER: 
- contains links to social media and copyright info
- will be at the bottom of the page

*/


import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="bg-light text-muted py-3">
      <Container>
        <Row className="align-items-center">
          {/* Left side - Designer info */}
          <Col md={4} className="text-start">
            <small>Designed and Developed by Sara Vargas</small>
          </Col>

          {/* Center - Copyright */}
          <Col md={4} className="text-center">
            <small>Copyright © {year} SV</small>
          </Col>

          {/* Right side - Social icons */}
          <Col md={4} className="text-end">
            <a
              href="https://github.com/QiLiu6"
              className="text-muted me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              className="text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}