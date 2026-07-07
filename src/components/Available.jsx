import { useEffect, useState } from "react";
import { FaUserAlt, FaFlag } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Available = ({ coin, setCoin }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState("available");

  useEffect(() => {
    fetch("/player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleChoosePlayer = (player) => {
    const isExist = selectedPlayers.find((p) => p.id === player.id);

    if (isExist) {
      toast.error("Player already selected");
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.warning("You can only select 6 players");
      return;
    }

    if (coin < player.price) {
      toast.error("Not enough money!");
      return;
    }

    setCoin((prev) => prev - player.price);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(`${player.name} added successfully`);
  };

  const handleRemovePlayer = (id) => {
    const removePlayer = selectedPlayers.find((p) => p.id === id);

    setCoin((prev) => prev + removePlayer.price);

    setSelectedPlayers(
      selectedPlayers.filter((player) => player.id !== id)
    );

    toast.info(`${removePlayer.name} removed`);
  };

  return (
    <section className="max-w-[1320px] mx-auto my-20 px-4">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-10">

        <h2 className="text-2xl md:text-3xl font-bold">
          {activeTab === "available"
            ? "Available Players"
            : `Selected Players (${selectedPlayers.length}/6)`}
        </h2>

        <div className="join w-full md:w-auto">

          <button
            onClick={() => setActiveTab("available")}
            className={`join-item btn flex-1 md:flex-none ${
              activeTab === "available"
                ? "bg-[#E7FE29] text-black"
                : "bg-white"
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setActiveTab("selected")}
            className={`join-item btn flex-1 md:flex-none ${
              activeTab === "selected"
                ? "bg-[#E7FE29] text-black"
                : "bg-white"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>

        </div>
      </div>

      {activeTab === "available" && (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {players.map((player) => (

            <div
              key={player.id}
              className="border-2 border-gray-200 rounded-2xl p-5"
            >

              <img
                src={player.image}
                alt={player.name}
                className="w-full h-56 md:h-64 rounded-xl object-cover"
              />

              <div className="flex items-center gap-3 mt-5">

                <FaUserAlt />

                <h2 className="text-xl md:text-2xl font-bold">
                  {player.name}
                </h2>

              </div>

              <div className="flex justify-between items-center mt-4">

                <div className="flex items-center gap-2 text-gray-500">

                  <FaFlag />

                  <span>{player.country}</span>

                </div>

                <span className="badge bg-gray-100 border-none">
                  {player.role}
                </span>

              </div>

              <hr className="my-5" />

              <h3 className="font-bold mb-3">
                Rating
              </h3>

              <div className="flex justify-between gap-2 text-sm md:text-base">

                <p className="font-semibold">
                  {player.battingStyle}
                </p>

                <p className="text-gray-400 text-right">
                  {player.bowlingStyle}
                </p>

              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6">

                <h2 className="font-bold">
                  Price: ${player.price}
                </h2>

                <button
                  onClick={() => handleChoosePlayer(player)}
                  className="btn btn-outline border-2 border-gray-200 w-full sm:w-auto"
                >
                  Choose Player
                </button>

              </div>

            </div>

          ))}

        </div>

      )}
            {activeTab === "selected" && (
        <div>

          {selectedPlayers.length === 0 ? (

            <div className="text-center py-20">

              <h2 className="text-3xl font-bold">
                Selected Players List is Empty
              </h2>

              <p className="text-gray-500 mt-3">
                Please select a player
              </p>

              <button
                onClick={() => setActiveTab("available")}
                className="btn bg-[#E7FE29] mt-8 text-black border-none"
              >
                Choose Player
              </button>

            </div>

          ) : (

            <>

              <div className="space-y-5">

                {selectedPlayers.map((player) => (

                  <div
                    key={player.id}
                    className="border rounded-2xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5"
                  >

                    <div className="flex flex-col sm:flex-row items-center gap-5 flex-1">

                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover"
                      />

                      <div className="text-center sm:text-left">

                        <h2 className="text-xl md:text-2xl font-bold">
                          {player.name}
                        </h2>

                        <p className="text-gray-500 mt-1">
                          {player.role}
                        </p>

                        <p className="text-gray-500">
                          Price: ${player.price}
                        </p>

                      </div>

                    </div>

                    <button
                      onClick={() => handleRemovePlayer(player.id)}
                      className="btn btn-circle btn-ghost text-red-500 self-end sm:self-center"
                    >
                      <MdDelete size={24} />
                    </button>

                  </div>

                ))}

              </div>

              <div className="mt-10">

                <div className="inline-block border-2 border-[#E7FE29] rounded-2xl p-2">

                  <button
                    onClick={() => setActiveTab("available")}
                    className="btn bg-[#E7FE29] hover:bg-[#E7FE29] text-black border-none"
                  >
                    Add More Player
                  </button>

                </div>

              </div>

            </>

          )}

        </div>
      )}

    </section>
  );
};

export default Available;