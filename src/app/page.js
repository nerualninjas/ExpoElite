import Banner from "@/components/Homepages/Banner";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import Rightbar from "@/components/shared/Rightbar/Rightbar";
import Footer from "@/components/Homepages/Footer";
import Testimonials from "@/components/Testimonials/Testimonials";

import FAQ from "@/components/Homepages/FAQ";
import MostPopular from "@/components/mostPopular/MostPopular";
import BestHomeSection from "@/components/BsetHome/BestHomeSection";

export default function Home() {
  return (
    <div>
      <div className="bg-[#F9FAFE]    rounded-t-2xl">
        <div className="flex flex-1">
          <Sidebar />
          <div className=" w-full  min-h-screen shadow-md rounded-t-2xl ">
            <Navbar />
            <div className="flex justify-between ">
              <div className="md:ml-60 mx-4 md:mx-0 relative top-20 min-h-screen">
                <Banner />
                <BestHomeSection />
                {/* <BestHomeSection/> */}
                <MostPopular />
                <Testimonials />

                <FAQ />
              </div>
              {/* <Rightbar /> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
