const Header = () => {
  return (
    <div className="w-full bg-gray-900 flex justify-between items-center p-4">
      <div>LOGO</div>
      <div className="flex-1 flex gap-12 justify-center items-center">
        <div className="cursor-pointer hover:text-red-500 font-bold duration-200">
          Home
        </div>
        <div className="cursor-pointer hover:text-red-500 font-bold duration-200">
          Online Games
        </div>
        <div className="cursor-pointer hover:text-red-500 font-bold duration-200">
          Retro Games
        </div>
      </div>
      <div className="py-1 px-4 bg-violet-600 font-bold rounded-md cursor-pointer hover:brightness-125 ">
        Login
      </div>
    </div>
  );
};

export default Header;
