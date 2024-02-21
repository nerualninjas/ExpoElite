import Banner from "@/components/Homepages/Banner";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

import Footer from "@/components/Homepages/Footer";
import Testimonials from "@/components/Testimonials/Testimonials";

import FAQ from "@/components/Homepages/FAQ";
import MostPopular from "@/components/mostPopular/MostPopular";
import BestHomeSection from "@/components/BsetHome/BestHomeSection";
import ChatWindow from "@/components/ChatWindow/ChatWindow";
import PremiumSeller from "@/components/Dashboard/Seller/PremiumSeller/PremiumSeller"


export default function Home() {

  return (
    <div>
      <div className="bg-[#F9FAFE]    rounded-t-2xl">
        <div className="flex flex-1">
          <Sidebar />
          <div className=" w-full  min-h-screen shadow-md rounded-t-2xl ">
            <Navbar />
            <div>
              <div className="md:ml-60 mx-4 md:mx-0 relative top-20 min-h-screen">
                <Banner />
                <BestHomeSection />
                {/* <BestHomeSection/> */}
                <MostPopular />
                <Testimonials />

                <FAQ />
                {/* <PremiumSeller/> */}
                <Footer />
                <ChatWindow />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
