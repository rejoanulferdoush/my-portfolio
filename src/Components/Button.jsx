const Button = ({ children, className = "", color = "text-white" }) => {
  return (
    <div
      className={`btn btn-primary btn-left-pattern border-0 inline-flex items-center justify-center  hover:bg-primary-dark rounded-l-[20px] rounded-r-[100px] ${color} text-lg font-normal uppercase ps-[20px]  ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
