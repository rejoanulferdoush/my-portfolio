import { Zoom } from "react-awesome-reveal";
import Button from "../../Components/Button";
import Col from "../../Components/Col";

const PortfolioCard = ({ project, setProjectModal, setSelectedProject }) => {
  return (
    <Col className="sm:w-1/2 lg:w-1/3 mb-10 md:mb-0">
      <Zoom>
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
            <div className="card-actions justify-center mt-4">
              <Button
                className="text-sm"
                onClick={() => {
                  setProjectModal(true);
                  setSelectedProject(project);
                }}
              >
                View Details
              </Button>
              <a target="_blank" href={project.liveSite}>
                <Button className="text-sm">Preview Site</Button>
              </a>
            </div>
          </div>
        </div>
      </Zoom>
    </Col>
  );
};

export default PortfolioCard;
