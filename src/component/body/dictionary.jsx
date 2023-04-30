import React from "react";

export default function Dictionary(){
    return (
        <div className="dictionary-box">
                <div className="left-content">
                    <div className="image-box">
                        <img id="image" src="#"/>
                        <p><a className="hidden">Word :</a><span id="title"></span></p>
                    </div>
                </div>
                <div className="right-content">
                    <div className="top-line">
                        <div className="title">
                            <p><a className="hidden">Phonetic :</a><span id="thisword"></span></p>
                        </div>
                    </div>
                    <div className="central-line">
                        <div id="audio"></div>
                    </div>
                    <div className="bottom-line">
                        <p><a className="hidden">definition :</a><span id="definition"></span></p>
                        <p><a className="hidden">Part's of Speech:</a><span id="part-of-speech"></span></p>
                        <p id="pronoun"></p>
                        <p id="exam"></p>
                    </div>
                </div>
                <div className="history">
                    <h3> Recent History </h3>
                    <ul>
                        <li id="item"></li>
                    </ul>
                </div>
                <div className="weather-box">
                    <div className="wrapper">
                         {/* Refactor this Weather APP */}
                    </div>
                </div>
        </div>
    )
}