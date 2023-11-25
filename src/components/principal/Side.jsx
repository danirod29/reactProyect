import React, { useState } from "react";
import { useAuth } from "../../config/AuthContex";
import { useNavigate } from "react-router-dom";

const Side = () => {
  const { user } = useAuth();
  console.log(user);

  const navigate = useNavigate();

  const handlecreate = () =>{
    navigate("/create")
  }

  return (
    <div>
      <div className="drawer-open lg:drawer-open">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle hidden"
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" p-4 w-52 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
                <div className="h-24 ">  Bienvenido </div>
                </li>
            <li>
              <button className="btn btn-outline" onClick={handlecreate}>Agregar Tarea</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Side;
