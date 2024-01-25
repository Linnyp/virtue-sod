import About from "./about";
import video from "../assets/virtueXsmall.mp4";

export default function Home() {
  return (
    <main className="home-contain">
      <div style={{ background: "#3d4a3d" }}>
        <video autoPlay muted loop src={video} id="video"></video>
      </div>
      {/* <div id="hero-contain"></div> */}
      <About />
    </main>
  );
}
