import "./Home.scss";
import Header from "../Shared/Header";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Footer from "../Shared/Footer";
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <GridLoader color="#469bea" size={30} />
      </div>
    );
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
