import React from "react";
import Player from "./Player";
import Players from "./Players";

const PlayerList = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "10px",
        padding: "10px",
        fontSize: "medium",
      }}
    >
      {Players.map((eachPlayer) => {
        return (
          <Player
            image={eachPlayer.image}
            name={eachPlayer.name}
            team={eachPlayer.team}
            nationality={eachPlayer.nationality}
            jerseyNumber={eachPlayer.jerseyNumber}
            age={eachPlayer.age}
          />
        );
      })}
    </div>
  );
};

export default PlayerList;
