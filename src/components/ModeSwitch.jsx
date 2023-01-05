import React, { useContext } from "react";
import { MainContext } from "../context/ContextProvider";

const ModeSwitch = () => {
  const { mode, setMode } = useContext(MainContext);

  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <button style={{border:"2px solid red", borderRadius:"10px",padding:"3px"}} onClick={changeMode}>Change Mode</button>
    </>
  );
};

export default ModeSwitch;
