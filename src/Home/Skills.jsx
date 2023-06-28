import Marquee from "react-fast-marquee";
import Container from "../Components/Container";
import SkillIcons from "../Components/SkillIcons/SkillIcons";
import Title from "../Components/Title/Title";
import skillBG from "./../assets/skill-bg.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[500px] w-full banner-bg relative text-white z-0 pt-[120px] pb-[250px]"
      style={{
        backgroundImage: `url(${skillBG})`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Title border="dark" color="text-white" className="mb-16">
          Skills
        </Title>
        <Marquee direction="right">
          <SkillIcons
            icon="vscode-icons:file-type-html"
            width="80"
          ></SkillIcons>
          <SkillIcons icon="vscode-icons:file-type-css" width="94"></SkillIcons>
          <SkillIcons icon="logos:bootstrap" width="80"></SkillIcons>
          <SkillIcons
            icon="skill-icons:tailwindcss-dark"
            width="80"
          ></SkillIcons>
          <SkillIcons icon="logos:javascript" width="70"></SkillIcons>
          <SkillIcons icon="skill-icons:react-dark" width="80"></SkillIcons>
          <SkillIcons icon="devicon:reactrouter" width="80"></SkillIcons>
          <SkillIcons icon="devicon:reactbootstrap" width="80"></SkillIcons>
          <SkillIcons icon="logos:daisyui" width="85"></SkillIcons>
          <SkillIcons icon="skill-icons:expressjs-dark" width="90"></SkillIcons>
          <SkillIcons icon="logos:axios" width="130"></SkillIcons>
          <SkillIcons icon="logos:jwt" tooltip="JWT" width="180"></SkillIcons>
          <SkillIcons icon="logos:stripe" width="150"></SkillIcons>
          <SkillIcons icon="logos:firebase" width="50"></SkillIcons>
          <SkillIcons icon="logos:vercel" width="80"></SkillIcons>
          <SkillIcons icon="skill-icons:mongodb" width="80"></SkillIcons>
          <SkillIcons icon="skill-icons:wordpress" width="80"></SkillIcons>
        </Marquee>
      </Container>
    </section>
  );
};

export default Skills;
