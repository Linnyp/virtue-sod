import img2 from "../assets/images/sodLoad.jpg";
import before from "../assets/images/sodBeforeCloseup.jpg";
import after from "../assets/images/sodAfter.jpg";
import { Servicespage } from "@/components/component/servicespage";

export default function Services() {
  return (
    <div id="services-contain">
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
