import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          height: "90vh",  // instead of 100vh
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "linear-gradient(135deg, #dbeafe, #fce7f3)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          <Typewriter
            words={["Welcome to My Portfolio"]}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </section>
 {/* About Me Section */}

<section
  style={{
    padding: "2rem 1rem",
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  }}
>
  {/* Text Side */}
  <div style={{ flex: 1 }}>
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ fontSize: "2rem", marginBottom: "1rem" }}
    >
      About Me
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
      style={{
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "#444",
        textAlign: "left",
      }}
    >
      Hi, I’m Sara Vargas, a graduate student in the MSCS program at NYU’s
      Courant Institute. My background bridges computer science, economics,
      and mathematics, and I’m passionate about building technology that is
      both impactful and user-centered.
      <br />
      <br />
      I have experience in software development, research, and teaching, and I
      enjoy working across the stack, from designing machine learning models
      to developing web applications and creating interactive data
      visualizations.
      <br />
      <br />
      Most recently, I’ve worked as a Software Developer at Octavate, where I
      built a CNN in PyTorch to evaluate music tracks, developed a RESTful
      API-powered web scraper, and designed data visualization tools to drive
      product insights.
      <br />
      <br />
      Beyond technical development, I’m drawn to the product side of
      engineering — thinking about how tools can be designed to meet real-world
      needs and deliver meaningful experiences.
      <br />
      <br />
      My projects reflect this mix of technical rigor and product-minded
      creativity, from researching the labor force impacts of parental leave
      policies to teaching Python to underrepresented high school students.
      <br />
      <br />
      When I’m not coding or analyzing data, I enjoy singing, hiking, and
      dancing!
    </motion.p>
  </div>

  {/* Headshot Side */}
  <motion.img
    src="public/headshot.jpg" // replace with your image path
    alt="Sara Vargas Headshot"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    style={{
      flex: "0 0 300px",
      borderRadius: "50%",
      objectFit: "cover",
      width: "300px",
      height: "300px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    }}
  />
</section>

    </div>
  );
}