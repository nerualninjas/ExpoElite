import Banner from "@/components/Homepages/Banner";

import Testimonials from "@/components/Testimonials/Testimonials";

import FAQ from "@/components/Homepages/FAQ";
import MostPopular from "@/components/mostPopular/MostPopular";
import BestHomeSection from "@/components/BsetHome/BestHomeSection";

export default function Home() {
  return (
    <div className="  p-2">
      <Banner />
      <BestHomeSection />
      {/* <BestHomeSection/> */}
      <MostPopular />
      <Testimonials />

      <FAQ />
    </div>
  );
}
