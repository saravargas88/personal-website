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
          padding: "2rem 1rem",  // smaller than 4rem
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
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
          style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#444" }}
        >
          I'm Sara Vargas, a passionate software developer with a love for
          creating innovative solutions. With experience in full-stack
          development, I enjoy working on projects that challenge me to learn
          and grow. Welcome to my portfolio!
        </motion.p>
      </section>
    </div>
  );
}