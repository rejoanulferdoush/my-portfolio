import NavLink from "../Components/NavLink";

const Header = () => {
  return (
    <div className="navbar bg-primary justify-center">
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1 ">
          <li>
            <NavLink href="#">Home</NavLink>
          </li>
          <li>
            <NavLink href="#about">About Me</NavLink>
          </li>
          <li>
            <NavLink href="#skills">Skills</NavLink>
          </li>
          <li>
            <NavLink href="#portfolio">Portfolio</NavLink>
          </li>
          <li>
            {" "}
            <NavLink href="#contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
