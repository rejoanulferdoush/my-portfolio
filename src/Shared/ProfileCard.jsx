const ProfileCard = ({ img, name, className = "", children = "" }) => {
  return (
    <div
      className={`card glass ${className} border-0 profile-card md:w-2/3 profile-shadow`}
    >
      <figure className="relative h-[350px] overflow-visible">
        <img
          alt={name}
          src={img}
          className="absolute -top-[50px] w-full h-[500px] object-contain"
        />
      </figure>
      <h5 className="profile-wave text-4xl font-normal text-white flex items-end justify-center min-h-[120px] rounded-b-lg z-10">
        <p className="pb-2">{name}</p>
      </h5>
      {children}
    </div>
  );
};

export default ProfileCard;
