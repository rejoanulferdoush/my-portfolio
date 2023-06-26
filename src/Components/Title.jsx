const Title = ({
  children,
  color = "text-gray-900",
  border = "bg-primary",
  className = "",
}) => {
  return (
    <div className="md:w-1/2 mx-auto">
      <h2
        className={`flex flex-wrap items-center justify-center gap-5 before:inline-block after:inline-block before:content-[''] after:content-[''] before:w-16 after:w-16 before:h-1 after:h-1 after:${border}
         before:${border} ${color} text-xl sm:text-2xl md:text-4xl font-bold ${className}`}
      >
        {children}
      </h2>
    </div>
  );
};

export default Title;
