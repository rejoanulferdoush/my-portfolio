const SocialIcon = ({ icon, link = "#" }) => {
  return (
    <a
      target="_blank"
      className="inline-flex items-center justify-center w-[65px] h-[65px] rounded-full text-4xl bg-white border-[3px] border-primary transition-all hover:border-primary-focus hover:bg-primary hover:text-white"
      href={link}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
