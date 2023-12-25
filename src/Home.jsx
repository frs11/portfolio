import About from "./Components/About";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

const Home = () => {
  return (
    <div id="home" className="lg:max-w-[1800px] relative layoutbg mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default Home;
