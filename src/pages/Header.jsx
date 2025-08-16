import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-900 flex justify-between items-center p-4">
      <div className="hidden sm:block ">LOGO</div>
      <div className="flex-1 flex gap-4 sm:gap-12 justify-center items-center">
        <div
          onClick={() => handleNavigate(ROUTES.HOME)}
          className="text-center cursor-pointer hover:text-red-500 font-bold duration-200"
        >
          Home
        </div>
        <div className="text-center cursor-pointer hover:text-red-500 font-bold duration-200">
          Online Games
        </div>
        <div className="text-center cursor-pointer hover:text-red-500 font-bold duration-200">
          Retro Games
        </div>
      </div>
      <div className="hidden sm:block py-1 px-4 bg-violet-600 font-bold rounded-md cursor-pointer hover:brightness-125 ">
        Login
      </div>
    </div>
  );
};

export default Header;
