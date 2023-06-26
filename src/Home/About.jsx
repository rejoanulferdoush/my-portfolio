import Col from "../Components/Col";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Title from "../Components/Title";
import ProfileCard from "../Shared/ProfileCard";
import avater2 from "./../assets/Avatars/avatar-1.png";

const About = () => {
  return (
    <section className="py-16">
      <Title className="mb-14">About Me</Title>
      <Container>
        <Row>
          <Col className="w-full md:w-1/2 mb-16 md:mb-0">
            <ProfileCard img={avater2}></ProfileCard>
          </Col>
          <Col className="w-full md:w-1/2 mb-16 md:mb-0"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
