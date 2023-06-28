import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Title from "../../Components/Title/Title";
import { FaTimes } from "react-icons/fa";
import Container from "../../Components/Container";
import Row from "../../Components/Row";
import PortfolioCard from "./PortfolioCard";
import SkillIcons from "../../Components/SkillIcons/SkillIcons";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { AutoPlay } from "@egjs/flicking-plugins";

const Portfolio = () => {
  const [projects, setProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState([]);
  const [projectModal, setProjectModal] = useState(false);
  const closeModal = () => {
    setProjectModal(false);
  };
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];
  useEffect(() => {
    fetch("./data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="py-16 mb-[150px] " id="portfolio">
      <Container>
        <Title className="mb-16">Portfolio</Title>
        <Row className="justify-center">
          {projects.length > 0 &&
            projects.map((project, index) => (
              <PortfolioCard
                project={project}
                key={index}
                setProjectModal={setProjectModal}
                setSelectedProject={setSelectedProject}
              ></PortfolioCard>
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
                <Dialog.Panel className="w-full max-w-screen-xl transform rounded-2xl bg-white text-slate-600 p-0 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-semibold leading-6 text-gray-900 flex flex-col md:flex-row justify-between items-center relative px-6 pt-10 pb-6 border-b-2"
                  >
                    <span className="leading-10">{selectedProject.name}</span>
                    <div className="flex items-center space-x-2 ">
                      <a
                        className="btn btn-link text-xl"
                        href={selectedProject.liveSite}
                        target="_blank"
                      >
                        Live
                      </a>
                      {selectedProject.clientRepo && (
                        <>
                          <span>|</span>
                          <a
                            className="btn btn-link text-xl"
                            href={selectedProject.clientRepo}
                            target="_blank"
                          >
                            Client
                          </a>
                        </>
                      )}
                      {selectedProject.serverRepo && (
                        <>
                          <span>|</span>
                          <a
                            className="btn btn-link text-xl"
                            href={selectedProject.serverRepo}
                            target="_blank"
                          >
                            Server
                          </a>
                        </>
                      )}
                    </div>
                    <button
                      onClick={closeModal}
                      className="btn btn-sm btn-circle btn-primary text-white absolute -top-2 -right-2"
                    >
                      <FaTimes></FaTimes>
                    </button>
                  </Dialog.Title>
                  <div className="px-6 py-10 text-gray-950 ">
                    <div className="mb-8 w-full">
                      <Flicking
                        circular={true}
                        plugins={plugins}
                        align="prev"
                        resizeOnContentsReady="true"
                      >
                        {selectedProject.screenshots &&
                          selectedProject.screenshots.map((img, i) => (
                            <div key={i}>
                              <img
                                src={img}
                                className="w-full h-max object-contain"
                              />
                            </div>
                          ))}
                      </Flicking>
                    </div>

                    <h3 className="text-2xl mb-2 font-semibold">Features</h3>
                    <ul className="list-disc ps-8 text-xl mb-16">
                      {selectedProject.features &&
                        selectedProject.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                    </ul>
                    <h3 className="text-2xl mb-3 font-semibold">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap">
                      {selectedProject.technologies &&
                        selectedProject.technologies.map((tech, index) => (
                          <SkillIcons
                            icon={tech.icon}
                            width="80"
                            key={index}
                            bg="bg-gradient"
                          ></SkillIcons>
                        ))}
                    </div>
                  </div>
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
