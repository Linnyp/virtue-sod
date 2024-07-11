/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/6J5ZTDkB8Yh
 */

export function Aboutsection() {
  return (
    <>
      <section className="bg-second w-full py-6 md:py-12 lg:pb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2 mx-auto max-w-[700px]">
              <div className="inline-block rounded-lg p-0 bg-accented  px-3 py-1 text-sm ">
                About Us
              </div>
              <h2 className="text-accented text-4xl font-bold tracking-tighter sm:text-5xl ">
                The one stop shop for all your lawn projects!
              </h2>
              <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black pt-8 pb-8 ">
                Welcome to Virtue Sod, your premier destination for top-notch
                sod services in Southwest Florida. We proudly serve cities such
                as Lehigh Acres, Cape Coral, Fort Myers, North Port, Estero,
                Bonita, Naples, and several others, ensuring lush green lawns
                that elevate your outdoor space.
              </p>
            </div>
            <div className="flex flex-col items-left justify-center gap-6 mx-auto max-w-sm text-center">
              <div className="flex items-center gap-2">
                {/* <div className="rounded-full p-3 bg-accentDark dark:bg-gray-800">
                  <MailIcon className="w-6 h-6" />
                </div> */}
                <p className="text-4xl text-salmon font-medium reenie ">
                  Virtuesod@gmail.com
                </p>
              </div>
              <div className="flex  items-center gap-2">
                {/* <div className="rounded-full p-3 bg-accentDark dark:bg-gray-800">
                  <PhoneIcon className="w-6 h-6" />
                </div> */}
                <p className="pl-[11%] text-4xl text-salmon font-medium reenie">
                  {" "}
                  (863) 843-5932
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="  border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 py-6 sm:py-20">
            <h2 className="text-accented text-center text-4xl font-bold tracking-tighter sm:text-5xl pb-4 ">
              Our Commitment
            </h2>
            <div className="space-y-4">
              <h3 className="font-bold tracking-tight text-accented">
                <i className="material-symbols-outlined">star</i>Quick
                Turnaround
              </h3>
              <p className="text-black">
                We understand the importance of efficiency. That's why we always
                strive to deliver prompt results without compromising quality.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold tracking-tight text-accented">
                <i className="material-symbols-outlined">star</i>{" "}
                Professionalism at All Times
              </h3>
              <p className="text-black">
                Our team upholds the highest standards of professionalism in
                every interaction. You can trust us to handle your requests with
                care and expertise.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold tracking-tight text-accented">
                <i className="material-symbols-outlined">star</i> Licensed and
                Insured
              </h3>
              <p className="text-black">
                Your peace of mind is our priority. We are fully licensed and
                insured, giving you confidence in the quality of our work and
                the protection of your assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
