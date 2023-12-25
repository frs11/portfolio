import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Educations from "./Components/Educations";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const Home = () => {
  return (
    <div id="home" className="lg:max-w-[1800px] relative layoutbg mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Educations></Educations>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
