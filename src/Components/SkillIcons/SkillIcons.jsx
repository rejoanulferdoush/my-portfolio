import { Icon } from "@iconify/react";

const SkillIcons = ({ icon = "", width = "60", bg = "glass" }) => {
  return (
    <div
      className={`me-5 btn h-auto ${bg} border-0 inline-flex items-center justify-center  hover:bg-primary-dark rounded-l-[10px] rounded-r-[100px] ps-4 pe-6 py-3`}
    >
      <Icon icon={icon} width={width} />
    </div>
  );
};

export default SkillIcons;
