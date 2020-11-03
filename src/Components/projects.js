import React from "react";
import Styled from "styled-components";
import SmashUlt from "../Images/smash-ult-cover-500px.png";
import Xpense from "../Images/xpense-cover-500px.png";

const Projects = Styled.div`
    margin-top: 24px;
    background-color: gray;
    text-align: center;
    color: white;

    .smash-container {
        position: relative;
        height: 250px;
        width: 500px;
        border: 2px solid white;

        div {
            position: absolute;
        }
    }
`;

const projects = () => {
    return (
        <Projects>
            <div className="smash-container">
                <img src={SmashUlt} ult="cover" />
                <div>
                    <h2>Smash Ultimate Stats Tracker</h2>
                </div>
            </div>
            <div className="xpense-container">
                <img src={Xpense} ult="cover" />
                <div>
                    <h2>Xpense</h2>
                </div>
            </div>
        </Projects>
    );
};

export default projects;