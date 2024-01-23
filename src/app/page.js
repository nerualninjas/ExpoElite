import BestHomeSectionV2 from "@/components/BsetHome/BestHomeSectionV2";
import Banner from "@/components/Homepages/Banner";

import Testimonials from "@/components/Testimonials/Testimonials";

import FAQ from "@/components/Homepages/FAQ";



export default function Home() {
  return (
    <div className=" md:mr-72 p-2">
      <Banner />
      <BestHomeSectionV2 />
      {/* <BestHomeSection/> */}

      <Testimonials />

      <FAQ />

    </div>
  );
}
