import img2 from "../assets/images/sodLoad.jpg";
import before from "../assets/images/sodBeforeCloseup.jpg";
import after from "../assets/images/sodAfter.jpg";

export default function Services() {
  return (
    <div id="services-contain">
      {/* <h1 className="about-head"> Services</h1>
      <ul id="service-list">
        <li>
          <span className="list-head">Site Preparation:</span>
          Before the vibrant green carpet of sod is rolled out, a crucial step
          is preparing the site. Our skilled team ensures that your land is
          expertly graded, leveled, and free of any impediments such as rocks,
          trash, or existing vegetation. We also take care of the removal of old
          sod, setting the stage for a pristine foundation.
        </li>
        <li>
          <span className="list-head">Delivery and Setup of Sod:</span>
          Choose from our range of services tailored to your specific needs. We
          offer the convenience of delivering and setting up pallets of sod,
          each covering an impressive 400-500 sq. ft. These pallets are
          transported to your site and laid meticulously on the prepared
          surface. At your request, our team can lay the sod in a precise
          pattern or direction. We also provide the option to chop or trim
          sections to seamlessly fit around any obstructions.
        </li>
      </ul>
      <div className="service-img-contain">
        <img src={img2} alt="" />
        <img src={img1} alt="" />
      </div> */}

      {/* <ul id="service-options">
        <h3 className="list-head">Service Options Include:</h3>
        <li>
          {<img src={check} alt="" />}
          Delivery of pallets only
        </li>
        <li>
          {<img src={check} alt="" />}
          Direct installation of sod only
        </li>
        <li>
          {<img src={check} alt="" />}
          Removal of old sod only
        </li>
      </ul> */}

      <h1 className="about-head"> services</h1>

      <div className="service-img-contain">
        <section>
          <img src={before} alt="" />
          <span className="list-head">Site Preparation</span>
          <p>
            Our skilled team ensures that your land is expertly graded, leveled,
            and free of any impediments such as rocks, trash, or existing
            vegetation. We also take care of the removal of old sod, setting the
            stage for a pristine foundation.
          </p>
        </section>

        <section>
          <img src={img2} alt="" />
          <span className="list-head">Delivery</span>{" "}
          <p>
            Choose from our range of services tailored to your specific needs.
            We offer the convenience of delivering and setting up pallets of
            sod, each covering an impressive 400-500 sq. ft.
          </p>
        </section>

        <section>
          <img src={after} alt="" />
          <span className="list-head">Installation of Sod</span>

          <p>
            At your request, our team can lay the sod in a precise pattern or
            direction. We also provide the option to chop or trim sections to
            seamlessly fit around any obstructions. foundation.
          </p>
        </section>
      </div>
    </div>
  );
}
