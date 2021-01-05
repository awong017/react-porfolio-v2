import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import SmashUltCover from "../Images/smash-ult-cover-light.png";
import XpenseCover from "../Images/xpense-cover-light.png";

const Projects = Styled.div`
    padding-top: 64px;
    padding-bottom: 120px;
    background-color: gray;
    text-align: center;
    color: white;

    h1 {
        margin-bottom: 48px;
    }

    .projects-display {
        display: flex;
        justify-content: space-around;

        a {
            link-style: none;
            color: white;
        }

        .cover-container {
            position: relative;
            height: 250px;
            width: 500px;
    
            &:hover .content {
                cursor: pointer;
                opacity: 0.8;
            }
    
            .content {
                position: absolute;
                top: 0;
                height: 154px;
                width: 500px;
                padding-top: 96px;
                background-color: black;
                text-align: center;
                opacity: 0.3;
                transition: 0.5s ease;
            }
        }
    }
`;

const projects = () => {
    return (
        <Projects>
            <h1>Latest Works</h1>
            <section className="projects-display">
                <Link to={"/smashult"}>
                    <div className="cover-container">
                        <img src={SmashUltCover} ult="cover" />
                        <div className="content">
                            <h2>Smash Ultimate Stats Tracker</h2>
                        </div>
                    </div>
                </Link>   
                <div className="cover-container">
                    <img src={XpenseCover} ult="cover" />
                    <div className="content">
                        <h2>Xpense</h2>
                    </div>
                </div>
            </section>
        </Projects>
    );
};

export default projects;