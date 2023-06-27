const Container = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-[15px] ${className}`}>{children}</div>
  );
};

export default Container;
