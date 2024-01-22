import BestHomeSectionV2 from "@/components/BsetHome/BestHomeSectionV2";
import Banner from "@/components/Homepages/Banner";
import Testimonials from "@/components/Testimonials/Testimonials";


export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <BestHomeSectionV2 />
      {/* <BestHomeSection/> */}
      <Testimonials />
    </div>
  );
}
