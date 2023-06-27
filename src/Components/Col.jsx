const Col = ({ children, className = "" }) => {
  return (
    <div className={`px-[15px] w-full mb-16 md:mb-0 ${className}`}>
      {children}
    </div>
  );
};

export default Col;
