import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>

      <section
        style={{
          height: "90vh",  
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
     

     Hello! I am Sara Vargas a graduate student at the <a href="https://www.courant.nyu.edu/">Courant Institute School at New York University</a>. 
     I am pursuing a Master's degree in Computer Science where I am honing my skills in machine learning. I am passionate about applying data science to solve real world issues in an ethical manner.
     
     
    I am particularly interested in how machine learning and statistcal models can be used to solve problems in public humanitarian efforts.   
    Currently to pursue this goal I am working at the Center for Data Science at NYU as a Research Assistant in the Demining Group under Professor Mateo Dulce Rubio. 
    My role involves leading the group's initiative to expand our dataset to explore out of distribution generalization techniques to ultimately create a more robust model.


  
    
    </motion.p>
  </div>

  {/* Headshot Side */}
  <motion.img
    src="/headshot.JPG" 
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