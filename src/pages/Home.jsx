import React from "react";
import { BiSolidJoystick } from "react-icons/bi";
import { FaGamepad, FaUsers } from "react-icons/fa";
import { MdOutlineGames } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <span className="text-5xl font-bold">Play with Friends</span>
        <span className="text-5xl font-bold text-cyan-500">
          Online --- Instantly
        </span>
      </div>
      <div className="flex flex-col items-center justify-center w-[40%] text-justify">
        <span className="text-lg text-gray-400">
          Join millions of players in real-time multiplayer games. Create rooms,
          chat with friends, and compete in your favorite games!
        </span>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 text-justify">
        <button className="py-1.5 px-10 bg-violet-700 font-bold rounded-lg cursor-pointer hover:brightness-125 duration-200">
          Start Playing Now
        </button>
      </div>
      <div className="flex items-center p-10 gap-8 justify-center">
        <div className="bg-gray-800 border-gray-600 cursor-pointer hover:scale-110 duration-200 px-4 py-6 w-72 border rounded-lg flex flex-col items-center justify-around gap-2">
          <span className="w-16 h-16 bg-violet-500 rounded-full shadow-md flex items-center justify-center">
            <FaGamepad className="text-3xl" />
          </span>
          <span className="text-xl font-bold">Single Player Games</span>
          <span className="text-center text-gray-400">
            Play game Instantly, no download required
          </span>
        </div>
        <div className="bg-gray-800 border-gray-600 cursor-pointer hover:scale-110 duration-200 px-4 py-6 w-72 border rounded-lg flex flex-col items-center justify-around gap-2">
          <span className="w-16 h-16 bg-sky-500 rounded-full shadow-md flex items-center justify-center">
            <RiTeamFill className="text-3xl" />
          </span>
          <span className="text-xl font-bold">Real-time Multiplayer</span>
          <span className="text-center text-gray-400">
            Play with friends Instantly, no download required
          </span>
        </div>
        <div className="bg-gray-800 border-gray-600 cursor-pointer hover:scale-110 duration-200 px-4 py-6 w-72 border rounded-lg flex flex-col items-center justify-around gap-2">
          <span className="w-16 h-16 bg-pink-500 rounded-full shadow-md flex items-center justify-center">
            <MdOutlineGames className="text-3xl" />
          </span>
          <span className="text-xl font-bold">Multiple Games</span>
          <span className="text-center text-gray-400">
            Choose from dozens of popular party games
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
