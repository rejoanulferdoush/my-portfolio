import "./Home.scss";
import Header from "../Shared/Header";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
    </div>
  );
};

export default Home;
