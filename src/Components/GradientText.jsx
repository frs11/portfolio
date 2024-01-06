/* eslint-disable react/prop-types */

const GradientText = ({ text }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
      {text}
    </span>
  );
};

export default GradientText;
