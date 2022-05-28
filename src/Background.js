import React from "react";
import Particles from "react-particles-js"
import Config from "./config/particle-config"

export default function Background() {
    return (
        <Particles params={Config}></Particles> 
    );
}

