import video from "../assets/virtueFinal.mp4";
import { Aboutsection } from "@/components/component/aboutsection";
import { Contactform } from "@/components/component/contactform";
import Reviews from "@/components/component/reviews";
import { Servicespage } from "@/components/component/servicespage";

export default function Home() {
  return (
    <main className="home-contain">
      <div style={{ background: "#3d4a3d" }}>
        <video autoPlay muted loop playsInline src={video} id="video"></video>
      </div>
      <Aboutsection />
      <Servicespage />
      <Reviews />
      <Contactform />
    </main>
  );
}
