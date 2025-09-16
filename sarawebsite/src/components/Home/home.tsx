
import { Typewriter } from "react-simple-typewriter";


export default function Home() {
  return (
    <div>
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontWeight: "bold",
      }}
    >
      <Typewriter
        words={["Welcome to Sara Vargas' Portfolio"]}
        cursor
        cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>


      <h1> 
        About Me
      </h1>
      <p>
        I'm Sara Vargas, a passionate software developer with a love for creating innovative solutions. With experience in full-stack development, I enjoy working on projects that challenge me to learn and grow. Welcome to my portfolio!
      </p>


    </div>


  );
}