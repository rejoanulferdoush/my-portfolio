const Row = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-wrap -mx-[15px] ${className}`}>{children}</div>
  );
};

export default Row;
