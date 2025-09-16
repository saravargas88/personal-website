import { Card, Button } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  link?: string;
  skills?: string[];
}

const skillColors: Record<string, string> = {
  React: "#61DBFB",
  Machine_Learning: "#feb8b1",
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#d1d34b",
  R: "#ffba6c",
  Node: "#a4ff9c",
  CSS: "#98adff",
  Default: "#6c757d",
  Geometric_Modeling: "#ffb3ff",
  Data_Analysis: "#ffdf94",
  HTML: "#ffb86c",
};

export default function ProjectCard({
  title,
  description,
  imgSrc,
  link,
  skills,
}: ProjectCardProps) {
  return (
    <Card className="project-card shadow-sm h-100 border-0">
      <div className="project-img-wrapper">
        <Card.Img
          variant="top"
          src={imgSrc}
          alt={title}
          className="project-img"
          style={{ maxWidth: "250px", border: "2px solid #000000" }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{title}</Card.Title>

        <Card.Text className="text-muted flex-grow-1">{description}</Card.Text>

        {/* Skill tags */}
        {skills && (
          <div className="mt-3 d-flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: skillColors[skill] || skillColors.Default,
                  color: "#000",
                  padding: "0.4em 0.8em",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                {skill.replace("_", " ")} {/*Two word skils*/}
              </span>
            ))}
          </div>
        )}
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
