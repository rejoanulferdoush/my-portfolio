import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Title from "../../Components/Title/Title";
import { FaTimes } from "react-icons/fa";
import Container from "../../Components/Container";
import Row from "../../Components/Row";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [projects, setProjects] = useState({});
  const [projectModal, setProjectModal] = useState(false);
  const closeModal = () => {
    setProjectModal(false);
  };

  useEffect(() => {
    fetch("./data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section className="py-16" id="portfolio">
      <Container>
        <Title>Portfolio</Title>
        <Row>
          {projects.length > 0 &&
            projects.map((project, index) => (
              <PortfolioCard project={project} key={index}></PortfolioCard>
            ))}
        </Row>
      </Container>
      {/*Project Modal*/}
      <Transition appear show={projectModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-slate-600 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-5 flex justify-between items-center"
                  >
                    Project Details
                    <button
                      onClick={closeModal}
                      className="btn btn-sm btn-circle btn-primary"
                    >
                      <FaTimes></FaTimes>
                    </button>
                  </Dialog.Title>
                  Project Details
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Portfolio;
