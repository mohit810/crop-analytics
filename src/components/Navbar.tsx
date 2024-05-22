import React from "react";
import { NavbarProps } from "../utils/dataStructs/props/NavbarProps";

const Navbar: React.FC<NavbarProps> = ({ states, setFlags }) => {
  return (
    <header className="App-header">
      <button className="button" onClick={() => setFlags(1)}>
        {states.displayMaxMinTable ? <>Hide</> : <>Display</>} Table 1
      </button>
      <div className="title">Crop Analytics</div>
      <button
        className="button"
        onClick={() => {
          setFlags(2);
        }}
      >
        {states.displayAvgTable ? <>Hide</> : <>Display</>} Table 2
      </button>
    </header>
  );
};

export default Navbar;
