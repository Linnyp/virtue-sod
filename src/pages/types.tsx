import { Productaccordion } from "@/components/component/productaccordian";

function Types() {
  return (
    <div id="types-contain" className="bg-second h-screen">
      <h1 className=" text-accented text-4xl text-center pb-0 mt-8">
        Sod Options
      </h1>
      <p className="mb-2 text-center px-3 text-accentDark">
        Contact us for a full list of available options and pricing.
      </p>
      <Productaccordion />
    </div>
  );
}

export default Types;
