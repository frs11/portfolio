import { FiDownload } from "react-icons/fi";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const googleDriveLink =
      "https://drive.google.com/uc?export=download&id=1LvFe6vmmpvMkI-7Tzq77u-79HtcJFwRB";

    const link = document.createElement("a");
    link.href = googleDriveLink;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="flex justify-center items-center border rounded-md border-cyan-400 hover:bg-cyan-500 text-base md:text-lg font-Rajdhani font-semibold hover:text-black duration-150 ease-in-out text-white px-3 py-1 md:py-2"
      onClick={handleDownload}
    >
      <FiDownload className="mr-2"></FiDownload>
      <span className="hidden md:flex mr-1">Download </span> Resume
    </button>
  );
};

export default DownloadResumeButton;
