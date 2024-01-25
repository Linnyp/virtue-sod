import Services from "./services";
import phone from "../assets/icons8-phone-30.png";
import email from "../assets/icons8-email-50.png";

export default function About() {
  return (
    <>
      <div id="about-contain">
        <section>
          <h1 className="about-head">About Us</h1>
          <p>
            Welcome to Virtue Sod, your premier destination for top-notch sod
            services in Southwest Florida. We proudly serve cities such as
            Lehigh Acres, Cape Coral, Fort Myers, North Port, Estero, Bonita,
            Naples, and several others, ensuring lush green lawns that elevate
            your outdoor space.
          </p>
          <div className="about-contact">
            <img src={phone} alt="" />
            <span>239-222-2222</span>
          </div>
          <div className="about-contact">
            <img src={email} alt="" />
            <span>virtue@gmail.com</span>
          </div>
        </section>

        <section>
          <h1 className="about-head">Our commitment to you</h1>
          <ul className="commitment-list">
            <li>
              <span className="list-head">Quick Turnaround:</span> We value your
              time and strive to complete projects efficiently, providing you
              with a beautiful lawn in no time.
            </li>
            <li>
              <span className="list-head">Professionalism at All Times:</span>
              Our team is dedicated to upholding the highest standards of
              professionalism in every aspect of our service.
            </li>
            <li>
              <span className="list-head">Licensed and Insured:</span>Rest easy
              knowing that you are working with a reputable company. We are
              fully licensed and insured, ensuring your peace of mind.
            </li>
          </ul>
        </section>
      </div>
      <Services />
    </>
  );
}
