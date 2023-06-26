import { TypeAnimation } from "react-type-animation";
import Col from "../Components/Col";
import Container from "../Components/Container";
import Row from "../Components/Row";
import circles from "../assets/round-shape.svg";
import avatar from "./../assets/Avatars/avatar-2.png";
import Button from "../Components/Button";
import ProfileCard from "../Shared/ProfileCard";

const Banner = () => {
  return (
    <section className="bg-primary-gradient-light min-h-[500px] w-full banner-bg relative text-white z-0 pt-20 pb-[150px]">
      <Container className="w-full">
        <Row>
          <Col className="w-full md:w-1/2 mb-16 md:mb-0">
            <div className="max-w-md flex flex-col gap-3">
              <p className="font-semibold text-2xl">Hi, I am a</p>
              <div className="card glass py-10 px-3">
                {" "}
                <TypeAnimation
                  sequence={[`Web`, 1000, `Mern Stack`, 1000]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "3em", display: "inline-block" }}
                  repeat={Infinity}
                />{" "}
                <span style={{ fontSize: "3em", display: "inline-block" }}>
                  Developer
                </span>
              </div>
              <p className="font-semibold text-2xl">
                Here to help you to make your dream site
              </p>
              <div>
                <a
                  href="https://drive.google.com/file/d/1DLUCcp-Cedz9jkEKGIawwN0lqV5ZAlD2/view?usp=sharing"
                  target="__blank"
                >
                  <Button
                    color="text-gray-900 hover:text-white"
                    className="bg-white "
                  >
                    My Resume
                  </Button>
                </a>
              </div>
            </div>
          </Col>
          <Col className="w-full md:w-1/2 relative">
            <ProfileCard
              img={avatar}
              name="Md. Faijul Islam"
              className="md:absolute"
            ></ProfileCard>
          </Col>
        </Row>
      </Container>
      <img src={circles} className="absolute top-0 w-full h-full -z-[1]" />
    </section>
  );
};

export default Banner;
