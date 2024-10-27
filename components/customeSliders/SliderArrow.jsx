import * as FaIcon from "react-icons/fa";
export const NextArrow = ({ onClick }) => {
  return (
    <button
      className="p-3 bg-greyShades-200 rounded-[69px] border-[1px] border-greyShades-400 hover:bg-greyShades-300 absolute z-50 left-60 top-[600px]"
      onClick={onClick}
    >
      <FaIcon.FaArrowRight className="text-greyShades-800 hover:text-white-200" />
    </button>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="p-3 bg-greyShades-200 rounded-[69px] border-[1px] border-greyShades-400 hover:bg-greyShades-300 absolute z-50 left-44 top-[600px]"
      onClick={onClick}
    >
      <FaIcon.FaArrowLeft className="text-greyShades-800 hover:text-white-200" />
    </button>
  );
};
