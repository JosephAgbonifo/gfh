import About from "@/app/components/about/about";
import Ecosystem from "@/app/components/about/ecosystem";
import { Mission } from "@/app/components/about/mission";
import People from "@/app/components/about/people";
import Slide from "@/app/components/about/slide";

export default function Apropos() {
  return (
    <div>
      <About />
      <Slide />
      <Mission />
      <People />
      <Ecosystem />
    </div>
  );
}
