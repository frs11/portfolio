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
    <div className="w-fit p-[1px] bg-gradient-to-br from-cyan-400 to-blue-700 rounded">
      <button
        className="flex justify-center items-center rounded bg-slate-900 hover:bg-gradient-to-r from-cyan-600 to-blue-800 text-base font-Rajdhani font-semibold duration-150 px-3 py-1 md:py-2 border-2 border-slate-900 text-cyan-300"
        onClick={handleDownload}
      >
        <FiDownload className="mr-2"></FiDownload>
        <span className="flex">
          <span className="hidden md:flex mr-1">Download</span> Resume
        </span>
      </button>
    </div>
  );
};

export default DownloadResumeButton;
