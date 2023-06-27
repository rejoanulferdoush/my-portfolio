import Col from "../../Components/Col";

const PortfolioCard = ({ project, setProjectModal, setSelectedProject }) => {
  return (
    <Col className="sm:w-1/2 lg:w-1/3 mb-10 md:mb-0">
      <div className="card w-full bg-base-100 shadow-2xl">
        <figure>
          <img
            src={project.screenshots[0]}
            alt={project.name}
            className="h-[300px] object-cover w-full"
          />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title text-3xl justify-center w-full">
            <span className="truncate">{project.name}</span>
          </h2>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                setProjectModal(true);
                setSelectedProject(project);
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default PortfolioCard;
