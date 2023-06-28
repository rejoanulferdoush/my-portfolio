const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-[15px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
