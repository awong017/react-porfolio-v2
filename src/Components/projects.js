import React from "react";
import Styled from "styled-components";
import SmashUlt from "../Images/smash-ult-cover-light.png";
import Xpense from "../Images/xpense-cover-light.png";

const Projects = Styled.div`
    margin-top: 24px;
    padding-top: 80px;
    padding-bottom: 100px;
    background-color: gray;
    text-align: center;
    color: white;

    .projects-display {
        display: flex;
        justify-content: space-around;

        .cover-container {
            position: relative;
            height: 250px;
            width: 500px;
    
            &:hover .content {
                cursor: pointer;
                opacity: 1;
            }
    
            img {

                &:hover {
                    opacity: 0.5;
                    transition: 0.5s ease;
                }
            }
    
            .content {
                position: absolute;
                top: 0;
                height: 154px;
                width: 500px;
                padding-top: 96px;
                text-align: center;
                opacity: 0;
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
                <div className="cover-container">
                    <img src={SmashUlt} ult="cover" />
                    <div className="content">
                        <h2>Smash Ultimate Stats Tracker</h2>
                    </div>
                </div>
                <div className="cover-container">
                    <img src={Xpense} ult="cover" />
                    <div className="content">
                        <h2>Xpense</h2>
                    </div>
                </div>
            </section>
        </Projects>
    );
};

export default projects;