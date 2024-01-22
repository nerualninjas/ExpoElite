import BestHomeSectionV2 from "@/components/BsetHome/BestHomeSectionV2";
import Banner from "@/components/Homepages/Banner";
import FAQ from "@/components/Homepages/FAQ";


export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <BestHomeSectionV2 />
      {/* <BestHomeSection/> */}
      <FAQ />
    </div>
  );
}
