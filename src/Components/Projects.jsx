import Project from "./Project";

const Projects = () => {
  const restoraImg = "https://i.ibb.co/BBdFN66/Restora.png";
  const pickNdropImg = "https://i.ibb.co/G5HhYvr/pick-n-drop.png";
  const foodbankImg = "https://i.ibb.co/vXsgqRK/Foodbank.png";
  const taskbookImg = "https://i.ibb.co/W2CBSdB/taskbook.png";

  const items = [
    {
      title: "Restora",
      image: restoraImg,
      liveLink: "https://restora-mern.netlify.app/",
      repoLink: "https://github.com/frs11/restora-client-side",
      description:
        "A restaurant management wesbite using MERN. User can create/order food anytime.",
    },
    {
      title: "Pick'n Drop",
      image: pickNdropImg,
      liveLink: "https://pick-n-drop-service.netlify.app/",
      repoLink: "https://github.com/frs11/pick-n-drop-client-side",
      description:
        "It is a parcel management website that have 3 modules. Admin, Deliveryman and user.",
    },
    {
      title: "Foodbank",
      image: foodbankImg,
      liveLink: "https://food-bank-mern.netlify.app/",
      repoLink: "https://github.com/frs11/foodbank-client-side",
      description:
        "A user friendly foodbank website to manage foods with beautify UI and  functionalities.",
    },
    {
      title: "Taskbook",
      image: taskbookImg,
      liveLink: "https://taskbook-mern.netlify.app/",
      repoLink: "https://github.com/frs11/task-manager",
      description:
        "A user-friendly website to track record of tasks. User can create, update or delete tasks anytime.",
    },
  ];
  return (
    <div id="projects" className="w-11/12 md:w-10/12 pt-10 mx-auto">
      <p className="text-2xl md:text-4xl text-center my-2 md:my-10 font-Orbitron font-medium text-cyan-300">
        <span className=" border-b-2 border-cyan-300 px-2 py-1 rounded-lg">
          Projects
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12 gap-4">
        {items.map((project, idx) => (
          <Project key={idx} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
