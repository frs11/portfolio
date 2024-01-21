import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Educations from "./Components/Educations";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const Home = () => {
  // const horizontalLineStyle = "border-slate-700";
  const horizontalLineStyle = (
    <>
      <hr className="border-slate-800" />
    </>
  );
  return (
    <div
      id="home"
      className="lg:max-w-[1800px] relative mx-auto bg-gradient-to-r from-slate-950 to-slate-900"
    >
      <Navbar></Navbar>
      <Banner></Banner>
      {horizontalLineStyle}
      <About></About>
      {horizontalLineStyle}
      <Educations></Educations>
      {horizontalLineStyle}
      <Skills></Skills>
      {horizontalLineStyle}
      <Projects></Projects>
      {horizontalLineStyle}
      <Contact></Contact>
      {horizontalLineStyle}
      <Footer></Footer>
    </div>
  );
};

export default Home;
