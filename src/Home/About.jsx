import { Fade } from "react-awesome-reveal";
import Col from "../Components/Col";
import Container from "../Components/Container";
import Row from "../Components/Row";
import SocialIcon from "../Components/SocialIcon";
import Title from "../Components/Title/Title";
import ProfileCard from "../Shared/ProfileCard";
import avater2 from "./../assets/Avatars/avatar-1.png";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import Button from "../Components/Button";
import { scroller } from "react-scroll";

const About = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const handleLinkClick = (element) => {
    scrollToElement(element);
  };

  return (
    <section className="pt-20 pb-[120px]" id="about">
      <Title className="mb-14">About Me</Title>
      <Container>
        <Row>
          <Col className="md:w-1/2 mb-16">
            <Fade triggerOnce="true">
              <ProfileCard img={avater2} className="relative">
                <div className="flex space-x-5 absolute -bottom-7 left-1/2 -translate-x-1/2 z-20">
                  <SocialIcon
                    icon={<FaEnvelope />}
                    link="mailto:f.faijulislam144@gmail.com"
                  ></SocialIcon>
                  <SocialIcon
                    icon={<FaGithub />}
                    link="https://github.com/faijulislambd"
                  ></SocialIcon>
                  <SocialIcon
                    icon={<FaLinkedinIn />}
                    link="https://www.linkedin.com/in/faijul-islam-bd/"
                  ></SocialIcon>
                  <SocialIcon
                    icon={<FaFacebookF />}
                    link="https://www.facebook.com/md.faijulislambd"
                  ></SocialIcon>
                </div>
              </ProfileCard>
            </Fade>
          </Col>
          <Col className="md:w-1/2 text-gray-900 text-xl sm:text-2xl mb-16">
            <Fade direction="right" triggerOnce="true">
              <p className="mb-5">Hi There. </p>
            </Fade>
            <Fade direction="right" triggerOnce="true">
              <p className="mb-5">
                My name is Md. Faijul Islam. I am an experienced web developer
                with a strong background in creating dynamic and engaging
                websites. I have extensive knowledge of React and have
                successfully completed various projects using it. Additionally,
                I am well-versed in working with popular content management
                systems (CMS) such as WordPress.
              </p>
            </Fade>
            <Fade direction="right" triggerOnce="true">
              <p className="mb-5">
                Throughout my career, I have developed a diverse range of
                websites, incorporating responsive designs, user-friendly
                interfaces, and efficient functionalities.
              </p>
            </Fade>
            <Fade direction="right" triggerOnce="true">
              <p className="mb-5">
                If you are interested you can check out my work as well as
                download my resume.
              </p>
            </Fade>
            <Fade direction="right" triggerOnce="true">
              <div className="flex flex-wrap gap-4 justify-start">
                <a
                  href="#portfolio"
                  onClick={() => {
                    handleLinkClick("portfolio");
                  }}
                >
                  <Button className="text-sm">My Portfolio</Button>
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1DLUCcp-Cedz9jkEKGIawwN0lqV5ZAlD2"
                  target="__blank"
                >
                  <Button className="text-sm">
                    My Resume <FaDownload />
                  </Button>
                </a>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
