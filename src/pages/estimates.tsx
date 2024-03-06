import img1 from "../assets/images/Leonardo_Diffusion_XL_a_landscape_image_of_a_field_of_with_foc_2.jpg";

export default function Estimates() {
  return (
    <div className="contactpage-container">
      <form action="" className="contactpage-left">
        <div className="contactleft-title">
          <h2>Contact Us</h2>
          <hr />
        </div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-inputs"
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          className="contact-inputs"
          required
        />
        <textarea
          name="message"
          placeholder="Message..."
          className="contact-inputs"
          required
        />
        <button type="submit">Send</button>
      </form>
      <div className="contactpage-right"></div>
    </div>
  );
}
