import { Contactform } from "@/components/component/contactform";
import Image from "../assets/contact.png";

export default function Contact() {
  return (
    <div className="bg-second mt-20 md:mt-0">
      <Contactform src={Image} />
    </div>
  );
}
