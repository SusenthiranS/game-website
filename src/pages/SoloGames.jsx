import { useState } from "react";
import { GAME_FILES } from "../utils/constants";
import { useEffect } from "react";
import { PiGameControllerDuotone } from "react-icons/pi";

const SoloGames = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === "quit_game") {
        console.log("Quit button pressed in Godot!");
        setSelectedGame(null);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const soloGamesList = [
    { gameName: "Rocket Shooter", gameFile: GAME_FILES.ROCKET_SHOOTER },
    { gameName: "Gun Shooter", gameFile: GAME_FILES.GUN_SHOOTER },
  ];

  return (
    <div className="w-full flex flex-col justify-start items-center p-5">
      <h1 className="text-center text-3xl font-bold text-cyan-500">
        Single Player Games
      </h1>
      {selectedGame && (
        <div className="flex-1 w-full h-full p-4">
          <iframe className="w-full h-full" src={selectedGame} />
        </div>
      )}
      {!selectedGame && (
        <div className="w-full flex flex-wrap justify-center items-center gap-8 p-10">
          {soloGamesList.map((game, index) => (
            <div
              key={index}
              onClick={() => setSelectedGame(game.gameFile)}
              className="sm:w-80 w-[95%] max-h-56 min-w-52 min-h-52 flex flex-col justify-center items-center gap-3 p-5 border border-cyan-300 shadow-md shadow-cyan-200 hover:shadow-none hover:drop-shadow-cyan-400 hover:drop-shadow-md cursor-pointer rounded-lg"
            >
              <PiGameControllerDuotone className="w-4/5 h-4/5" />
              <div>{game.gameName}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SoloGames;
