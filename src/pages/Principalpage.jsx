import React from "react";
import NavBar from "../components/NavBar";
import Main from "../components/principal/Main";
import Side from "../components/principal/Side";

const Principalpage = () => {
  return (
    <div data-theme="light">
      <NavBar />
      <div className="flex w-full">
      <div className="grid h-auto flex-grow bg-base-300 place-items-stretch"><Side /></div>
        
        <div className="grid h-auto flex-grow bg-base-300 place-items-stretch"><Main /></div>
        
      </div>
    </div>
  );
};

export default Principalpage;
