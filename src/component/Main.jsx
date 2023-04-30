import React from "react";

import Navbar from "./body/Navbar";
import MenuBar from "./body/Menubar";
import Dictionary from "./body/dictionary";

export default function Main(){
    return (
        <div id="content-area">
           <Navbar />
           <MenuBar />
           <Dictionary />
        </div>
    )
}