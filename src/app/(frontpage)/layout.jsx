// import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
// import Rightbar from "@/components/shared/Rightbar/Rightbar";
import Footer from "@/components/Homepages/Footer";
const layout = ({ children }) => {
  return (
    <div>
      <div>
        <div className="bg-[#F9FAFE]    rounded-t-2xl">
          <div className="flex flex-1">
            <Sidebar />
            <div className=" w-full  min-h-screen shadow-md rounded-t-2xl ">
              {/* <Navbar /> */}
              <div className="md:ml-60 mx-4 md:mx-1 relative top-20 ">
                <div className="min-h-[calc(100vh-196px)]">{children}</div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
