import React from "react";

export default function Sidebar() {
    return (
       
        <div id="fixed-sidebar">
             <ul>
                <li><a href="#">
                        <span className="icon"><ion-icon name="book-outline"></ion-icon></span>
                        <span className="title"> ES Dictionary </span>
                    </a>
                </li>
                <li className="hovered"><a href="#">
                        <span className="icon"><ion-icon name="library"></ion-icon></span>
                        <span className="title"> Dashboard </span>
                    </a>
                </li>
                <li><a href="#">
                        <span className="icon"><ion-icon name="timer-outline"></ion-icon></span>
                        <span className="title"> History </span>
                    </a>
                </li>
                <li><a href="#">
                        <span className="icon"><ion-icon name="cog-outline"></ion-icon></span>
                        <span className="title"> Settings </span>
                    </a>
                </li>
                <li><a href="#">
                        <span className="icon"><ion-icon name="chatbubbles"></ion-icon></span>
                        <span className="title"> Support </span>
                    </a>
                </li>
              </ul>
        </div>
    )
}