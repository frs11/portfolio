const DownloadResumeButton = () => {
  const handleDownload = () => {
    // Replace 'YOUR_GOOGLE_DRIVE_LINK' with the actual link to your CV file
    const googleDriveLink =
      "https://drive.google.com/uc?export=download&id=1L2m9hV6qdfUzY0NZalm8_uM8w9b6K4rW";

    // Create an anchor element
    const link = document.createElement("a");
    link.href = googleDriveLink;

    // Set the download attribute to force the file download
    link.setAttribute("download", "resume.pdf");

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Trigger a click on the anchor element
    link.click();

    // Remove the anchor element from the document body
    document.body.removeChild(link);
  };

  return (
    <button
      className="border rounded bg-cyan-400 text-black px-4 py-2"
      onClick={handleDownload}
    >
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
