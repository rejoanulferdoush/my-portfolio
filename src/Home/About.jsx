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
} from "react-icons/fa";

const About = () => {
  return (
    <section className="py-16" id="about">
      <Title className="mb-14">About Me</Title>
      <Container>
        <Row>
          <Col className="md:w-1/2">
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
          </Col>
          <Col className="md:w-1/2 text-gray-900 text-3xl">
            <p className="mb-5">Hi There. </p>

            <p className="mb-5">
              I am an experienced web developer with a strong background in
              creating dynamic and engaging websites. I have extensive knowledge
              of React and have successfully completed various projects using
              it. Additionally, I am well-versed in working with popular content
              management systems (CMS) such as WordPress.
            </p>

            <p>
              Throughout my career, I have developed a diverse range of
              websites, incorporating responsive designs, user-friendly
              interfaces, and efficient functionalities.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
