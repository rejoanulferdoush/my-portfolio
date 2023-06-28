const Col = ({ children, className = "" }) => {
  return (
    <div className={`px-[15px] w-full md:mb-0 ${className}`}>{children}</div>
  );
};

export default Col;
