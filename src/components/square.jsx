import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "../styles/square.scss";

export function Square({ index, Square, Playing, Clicked }) {
  const { id, player } = Square;
  const emitACLick = () => !player && Clicked(id);
  return (
    <div
      className={`square 
        ${player ? ("One" === player ? "One" : "Two") : "playing_" + Playing}`}
      onClick={emitACLick}
    >
      <FontAwesomeIcon
        size="7x"
        icon={`${
          player
            ? "One" === player
              ? "times"
              : "circle"
            : "One" === Playing && !player
            ? "times"
            : "circle"
        }`}
      />
    </div>
  );
}
