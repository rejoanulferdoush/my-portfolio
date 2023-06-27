import { Icon } from "@iconify/react";

const SkillIcons = ({ tooltip = "Icon", icon = "", width = "60" }) => {
  return (
    <div className="tooltip" data-tip={tooltip}>
      <div className=" btn h-auto glass border-0 inline-flex items-center justify-center  hover:bg-primary-dark rounded-l-[10px] rounded-r-[100px] ps-2 pe-4 py-3">
        <Icon icon={icon} width={width} />
      </div>
    </div>
  );
};

export default SkillIcons;
