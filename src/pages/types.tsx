import { Productaccordion } from "@/components/component/productaccordian";

function Types() {
  return (
    <div id="types-contain" className="bg-seagreen">
      <h1 className=" text-amber text-4xl text-center pb-0 mt-8">
        Sod Options
      </h1>
      <p className="mb-2 text-center px-3">
        Contact us for a full list of available options and pricing.
      </p>
      <Productaccordion />
    </div>
  );
}

export default Types;
