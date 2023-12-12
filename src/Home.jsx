// import DownloadResumeButton from "./Components/DownloadResumeButton";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

const Home = () => {
  return (
    <div className="lg:max-w-[1800px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      {/* <DownloadResumeButton></DownloadResumeButton> */}
    </div>
  );
};

export default Home;
