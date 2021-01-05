import React from "react";
import Styled from "styled-components";
import Type48 from "../Images/typescript-48.png";
import Html48 from "../Images/html-48.png";
import Css48 from "../Images/css-48.png";
import Sass48 from "../Images/sass-48.png";
import Javascript48 from "../Images/javascript-48.png";
import Jquery48 from "../Images/jquery-50.png";
import React48 from "../Images/react-48.png";
import Redux48 from "../Images/redux-48.png"
import Node48 from "../Images/node-48.png";
import Npm48 from "../Images/npm-48.png";
import Express48 from "../Images/express-48.png";
import Postgres48 from "../Images/postgres-48.png";
import Api48 from "../Images/api-48.png";
import Mocha48 from "../Images/mocha-48.png";
import Github48 from "../Images/github-48.png";
import Heroku48 from "../Images/heroku-48.png";
import Zeit48 from "../Images/zeit-48.png";
import Gatsby48 from "../Images/gatsby-48.png";
import Graphql48 from "../Images/graphql-48.png";
import Strapi48 from "../Images/strapi-48.png";

const Skills = Styled.div`
    position: relative;
    height: 648px;
    width: 1456px;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 100px;

    .languages, .front-end, .back-end, .additional {
        position: absolute;
        box-shadow: 
            0 4px 8px 0 rgba(0, 0, 0, 0.2), 
            0 4px 8px 0 rgba(0, 0, 0, 0.19);
        height: 300px;
        width: 400px
    }

    .skills-icons {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        text-align: center;
    }

    .icon-container {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 24px;
        z-index: 1;
        height: 48px;
        width: 48px;

        &:hover div {
            opacity: 1;
        }

        &:hover img {
            opacity: 0;
        }

        div {
            position: absolute;
            left: 0px;
            top: 16px;
            z-index: -1;
            opacity: 0;
            transition: 0.5s;
        }
    }

    img {
        margin-bottom: 24px;
        margin-left: auto;
        margin-right: auto;
        transition: opacity, 0.5s ease-in-out;
    }

    .skills-heading {
        margin-left: 24px;
    }

    .languages {
        top: 148px;
        color: gray;
    }

    .front-end {
        top: 424px;
        left: 352px;
        background-color: gray;
        color: white;
    }

    .back-end {
        top: 148px;
        left: 704px;
        background-color: #ffcc99;
        color: white;
    }

    .additional {
        top: 424px;
        left: 1056px;
        background-color: white;
        color: gray;
    }

    @media screen and (max-width: 1500px) {
        width: initial;

        .languages {
            left: 24px;
        }
    
        .front-end {
            left: 48px;
        }
    
        .back-end {
            left: 462px;
        }
    
        .additional {
            left: 486px;
        }
    }
`

const skills = () => {
    return (
        <Skills>
            <div className="languages">
                <h2 className="skills-heading">Languages</h2>
                <div className="skills-icons">
                    <div className="icon-container">
                        <img src={Javascript48} alt="icon" />
                        <div>JavaScript</div>
                    </div>
                    <div className="icon-container">
                        <img src={Type48} alt="icon" />
                        <div>TypeScript</div>
                    </div>
                </div>
            </div>
            <div className="front-end">
                <h2 className="skills-heading">Front End</h2>
                <div className="skills-icons">
                    <div className="icon-container">
                        <img src={React48} alt="icon" />
                        <div>React</div>
                    </div>
                    <div className="icon-container">
                        <img src={Redux48} alt="icon" />
                        <div>Redux</div>
                    </div>
                    <div className="icon-container">
                        <img src={Gatsby48} alt="icon" />
                        <div>Gatsby</div>
                    </div>
                    <div className="icon-container">
                        <img src={Jquery48} alt="icon" />
                        <div>jQuery</div>
                    </div>
                    <div className="icon-container">
                        <img src={Html48} alt="icon" />
                        <div>HTML5</div>
                    </div>
                    <div className="icon-container">
                        <img src={Css48} alt="icon" />
                        <div>CSS3</div>
                    </div>
                    <div className="icon-container">
                        <img src={Sass48} alt="icon" />
                        <div>Sass</div>
                    </div>
                </div>
            </div>
            <div className="back-end">
                <h2 className="skills-heading">Back End</h2>
                <div className="skills-icons">
                    <div className="icon-container">
                        <img src={Express48} alt="icon" />
                        <div>Express</div>
                    </div>
                    <div className="icon-container">
                        <img src={Postgres48} alt="icon" />
                        <div>PostgreSQL</div>
                    </div>
                    <div className="icon-container">
                        <img src={Graphql48} alt="icon" />
                        <div>GraphQL</div>
                    </div>
                    <div className="icon-container">
                        <img src={Api48} alt="icon" />
                        <div>API</div>
                    </div>
                    <div className="icon-container">
                        <img src={Mocha48} alt="icon" />
                        <div>Mocha</div>
                    </div>
                </div>
            </div>
            <div className="additional">
                <h2 className="skills-heading">Additional Tools</h2>
                <div className="skills-icons">
                    <div className="icon-container">
                        <img src={Npm48} alt="icon" />
                        <div>NPM</div>
                    </div>
                    <div className="icon-container">
                        <img src={Node48} alt="icon" />
                        <div>Node</div>
                    </div>
                    <div className="icon-container">
                        <img src={Strapi48} alt="icon" />
                        <div>Strapi</div>
                    </div>
                    <div className="icon-container">
                        <img src={Github48} alt="icon" />
                        <div>Github</div>
                    </div>
                    <div className="icon-container">
                        <img src={Heroku48} alt="icon" />
                        <div>Heroku</div>
                    </div>
                    <div className="icon-container">
                        <img src={Zeit48} alt="icon" />
                        <div>Vercel</div>
                    </div>
                </div>
            </div>
        </Skills>
    ); 
};

export default skills;