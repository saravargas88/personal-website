

import { Card, Button } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  link?: string;
}

export default function ProjectCard({ title, description, imgSrc, link }: ProjectCardProps) {
  return (
    <Card className="project-card shadow-sm h-100 border-0">
     
      <div className="project-img-wrapper">
        <Card.Img variant="top" src={imgSrc} alt={title} className="project-img" style={{ maxWidth: "250px", border: "2px solid #000000ff" }} />
        
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{title}</Card.Title>
        
        <Card.Text className="text-muted flex-grow-1">{description}</Card.Text>

        {link && (
          <Button 
            variant="dark" 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2"
          >
             View Project
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}