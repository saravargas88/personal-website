
import { Typewriter } from "react-simple-typewriter";


export default function Home() {
  return (
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
        words={["Welcome to Sara Vargas Portfolio"]}
        cursor
        cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
}