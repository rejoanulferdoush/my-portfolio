const NavLink = ({ children, className = "", href = "#", onClick }) => {
  return (
    <a
      href={href}
      className={`text-white text-lg border-b-2 border-transparent transition-all hover:border-white focus:border-white ${className}`}
      onClick={onClick && onClick}
    >
      {children}
    </a>
  );
};

export default NavLink;
