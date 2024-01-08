/* eslint-disable react/prop-types */
const GradientDesc = ({ text }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
      {text}
    </span>
  );
};

export default GradientDesc;
