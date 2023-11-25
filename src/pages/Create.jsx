import React from "react";
import CreateComp from "../components/create/CreateComp";
import NavBar from "../components/NavBar";


const Create = () =>{
    return(
        <div data-theme="light">
            <NavBar />
            <CreateComp />
        </div>
    )
}

export default Create;