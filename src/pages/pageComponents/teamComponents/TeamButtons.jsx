import React from "react";

const teams = ["IT Team", "Survey Team", "Marketing Team", "Developer Team", "Design Team", "HR Team"];

const TeamButtons = ({ setSelectedTeam, selectedTeam }) => {
  return (
    <div className="md:flex justify-center items-center grid grid-cols-2 gap-4 space-x-4 pt-10">
      {teams.map((team) => (
        <button
          key={team}
          onClick={() => setSelectedTeam(team)}
          className={`${
            selectedTeam === team ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          } md:px-4 md:py-2 px-2 py-1 rounded-lg transition-colors duration-200 text-sm`}
        >
          {team}
        </button>
      ))}
    </div>
  );
};

export default TeamButtons;
