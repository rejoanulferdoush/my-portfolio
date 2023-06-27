import Col from "../../Components/Col";

const PortfolioCard = ({ project }) => {
  return (
    <Col className="md:w-1/3 mb-10 md:mb-0">
      <div>{project.name}</div>
    </Col>
  );
};

export default PortfolioCard;
