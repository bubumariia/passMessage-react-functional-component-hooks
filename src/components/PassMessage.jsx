import React, { useState } from "react";

function PassMessage() {
  const [positionState, setPositionState] = useState({
    inputValue: "",
    clicked: false
  });

  return (
    <div className="container">
      <h1>A Message You Would Like To Pass</h1>
      <input
        className="messageInput"
        value={positionState.inputValue}
        onChange={(event) =>
          setPositionState({ inputValue: event.target.value })
        }
      />
      <button
        onClick={() => setPositionState({ ...positionState, clicked: true })}
      >
        Send
      </button>
      <button
        onClick={() => setPositionState({ inputValue: "", clicked: false })}
      >
        Clear
      </button>
      <h2>Last Message Delivered</h2>
      <p>{positionState.clicked === true ? positionState.inputValue : ""}</p>
    </div>
  );
}
export default PassMessage;
