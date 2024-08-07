/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0pg4cKkXUWr
 */
import img2 from "../../assets/images/sodLoad.jpg";
import before from "../../assets/images/sodBeforeCloseup.jpg";
import after from "../../assets/images/sodAfter.jpg";

export function Servicespage() {
  return (
    <section
      id="services-contain"
      className="bg-second w-full py-12 md:py-24 lg:py-32 text-white"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-6xl text-accented">
            Services
          </h2>

          <p className="mx-auto max-w-[600px]  md:text-xl/relaxed xl:text-base/relaxed text-black pb-6">
            We provide a range of services to meet your needs.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-center gap-6 md:grid-cols-3 md:items-center md:gap-10">
          <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
            <img
              alt="Service Image"
              className="rounded-lg object-cover aspect-[4/3] overflow-hidden transition-[width] hover:w-3/4"
              height="120"
              src={before}
              width="200"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold tracking-tight text-accented">
                Site Preparation
              </h3>
              <p className="text-sm text-black">
                Our skilled team ensures that your land is expertly graded,
                leveled, and free of any impediments such as rocks, trash, or
                existing vegetation. We also take care of the removal of old
                sod, setting the stage for a pristine foundation.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
            <img
              alt="Service Image"
              className="rounded-lg object-cover aspect-[4/3] overflow-hidden transition-[width] hover:w-3/4"
              height="120"
              src={img2}
              width="200"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold tracking-tight text-accented">
                Delivery
              </h3>
              <p className="text-sm  text-black">
                Choose from our range of services tailored to your specific
                needs. We offer the convenience of delivering and setting up
                pallets of sod, each covering an impressive 400-500 sq. ft.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
            <img
              alt="Service Image"
              className="rounded-lg object-cover aspect-[4/3] overflow-hidden transition-[width] hover:w-3/4 "
              height="120"
              src={after}
              width="200"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold tracking-tight text-accented">
                Installation of Sod
              </h3>
              <p className="text-sm text-black">
                At your request, our team can lay the sod in a precise pattern
                or direction. We also provide the option to chop or trim
                sections to seamlessly fit around any obstructions. foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
