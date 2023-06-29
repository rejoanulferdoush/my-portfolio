const Button = ({
  children,
  className = "",
  color = "text-white",
  onClick,
  type,
}) => {
  return (
    <button
      type={type && type}
      className={`btn btn-primary btn-left-pattern border-0 inline-flex items-center justify-center hover:scale-[1.05] hover:bg-primary-dark border-radius ${color} text-lg font-normal uppercase ps-[20px]  ${className}`}
      onClick={onClick && onClick}
    >
      {children}
    </button>
  );
};

export default Button;
