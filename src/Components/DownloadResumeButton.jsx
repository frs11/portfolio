import { FiDownload } from "react-icons/fi";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const googleDriveLink =
      "https://drive.google.com/uc?export=download&id=1L2m9hV6qdfUzY0NZalm8_uM8w9b6K4rW";

    const link = document.createElement("a");
    link.href = googleDriveLink;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="flex justify-center items-center border rounded-md border-cyan-400 hover:bg-cyan-400 text-lg font-Rajdhani font-semibold hover:text-black duration-150 ease-in-out text-white px-3 py-2"
      onClick={handleDownload}
    >
      <FiDownload className="mr-2"></FiDownload>
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
