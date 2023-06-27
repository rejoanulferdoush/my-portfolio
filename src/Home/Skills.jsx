import Container from "../Components/Container";
import SkillIcons from "../Components/SkillIcons/SkillIcons";
import Title from "../Components/Title/Title";
import skillBG from "./../assets/skill-bg.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[500px] w-full banner-bg relative text-white z-0 pt-20 pb-[150px]"
      style={{
        backgroundImage: `url(${skillBG})`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Title border="dark" color="text-white">
          Skills
        </Title>
        <div className="flex flex-wrap space-x-10 space-y-10 items-center justify-center md:w-2/3 mx-auto">
          <SkillIcons
            icon="vscode-icons:file-type-html"
            tooltip="HTML5"
            width="65"
          ></SkillIcons>
          <SkillIcons
            icon="vscode-icons:file-type-css"
            tooltip="CSS3"
            width="94"
          ></SkillIcons>
          <SkillIcons
            icon="logos:bootstrap"
            tooltip="Bootstrap"
            width="80"
          ></SkillIcons>
          <SkillIcons
            icon="skill-icons:tailwindcss-dark"
            tooltip="Tailwind CSS"
            width="75"
          ></SkillIcons>
          <SkillIcons
            icon="logos:javascript"
            tooltip="JavaScript"
            width="70"
          ></SkillIcons>
          <SkillIcons
            icon="skill-icons:react-dark"
            tooltip="ReactJS"
            width="80"
          ></SkillIcons>
          <SkillIcons
            icon="devicon:reactrouter"
            tooltip="React Router"
            width="65"
          ></SkillIcons>
          <SkillIcons
            icon="devicon:reactbootstrap"
            tooltip="React Bootstrap"
            width="75"
          ></SkillIcons>
          <SkillIcons
            icon="logos:daisyui"
            tooltip="DaisyUI"
            width="85"
          ></SkillIcons>
          <SkillIcons
            icon="skill-icons:expressjs-dark"
            tooltip="ExpressJS"
            width="90"
          ></SkillIcons>
          <SkillIcons
            icon="logos:axios"
            tooltip="Axios"
            width="130"
          ></SkillIcons>
          <SkillIcons icon="logos:jwt" tooltip="JWT" width="180"></SkillIcons>
          <SkillIcons
            icon="logos:stripe"
            tooltip="Stripe Payment Gateway"
            width="150"
          ></SkillIcons>
          <SkillIcons
            icon="logos:firebase"
            tooltip="Firebase"
            width="50"
          ></SkillIcons>
          <SkillIcons
            icon="logos:vercel"
            tooltip="Vercel"
            width="80"
          ></SkillIcons>
          <SkillIcons
            icon="skill-icons:mongodb"
            tooltip="MongoDB"
            width="55"
          ></SkillIcons>
          <SkillIcons
            icon="skill-icons:wordpress"
            tooltip="Wordpress"
            width="65"
          ></SkillIcons>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
