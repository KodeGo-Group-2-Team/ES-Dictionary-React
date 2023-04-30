import React from "react";

export default function MenuBar(){
    return (
        <div className="menubar">
                <ul>
                    <li><a href="#">
                            <span className="icon"><ion-icon name="save"></ion-icon></span>
                            <span className="title"> Save Word </span>
                        </a>
                    </li>
                    <li><a href="#">
                            <span className="icon"><ion-icon name="add"></ion-icon></span>
                            <span className="title"> Add Word </span>
                        </a>
                    </li>
                    <li id="clearBtn" ><a href="http://" target="_blank" rel="noopener noreferrer">
                            <span className="icon"><ion-icon name="trash-bin"></ion-icon></span>
                            <span className="title">Clear Field</span>
                        </a>
                    </li>
                </ul>
            </div>
    )
}