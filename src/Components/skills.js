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
    color: gray;

    .languages, .front-end, .back-end, .additional {
        position: absolute;
        height: 300px;
        width: 400px
    }

    .skills-icons {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        text-align: center;
    }

    img {
        margin-bottom: 24px;
        margin-left: auto;
        margin-right: auto;
    }

    .skills-heading {
        margin-left: 24px;
    }

    .languages {
        top: 48px;
        border: 1px solid gray;
    }

    .front-end {
        top: 324px;
        left: 352px;
        background-color: gray;
        color: white;
    }

    .back-end {
        top: 48px;
        left: 704px;
        background-color: #ffcc99;
        color: white;
    }

    .additional {
        top: 324px;
        left: 1056px;
        border: 1px solid gray;
        background-color: white;
        color: gray;
    }
`

const skills = () => {
    return (
        <Skills>
            <div className="languages">
                <h2 className="skills-heading">Languages</h2>
                <div className="skills-icons">
                    <img src={Javascript48} alt="icon" />
                    <img src={Type48} alt="icon" />
                </div>
            </div>
            <div className="front-end">
                <h2 className="skills-heading">Front End</h2>
                <div className="skills-icons">
                    <img src={React48} alt="icon" />
                    <img src={Redux48} alt="icon" />
                    <img src={Gatsby48} alt="icon" />
                    <img src={Jquery48} alt="icon" />
                    <img src={Html48} alt="icon" />
                    <img src={Css48} alt="icon" />
                    <img src={Sass48} alt="icon" />
                </div>
            </div>
            <div className="back-end">
                <h2 className="skills-heading">Back End</h2>
                <div className="skills-icons">
                    <img src={Express48} alt="icon" />
                    <img src={Postgres48} alt="icon" />
                    <img src={Graphql48} alt="icon" />
                    <img src={Api48} alt="icon" />
                    <img src={Mocha48} alt="icon" />
                </div>
            </div>
            <div className="additional">
                <h2 className="skills-heading">Additional Tools</h2>
                <div className="skills-icons">
                    <img src={Npm48} alt="icon" />
                    <img src={Node48} alt="icon" />
                    <img src={Strapi48} alt="icon" />
                    <img src={Github48} alt="icon" />
                    <img src={Heroku48} alt="icon" />
                    <img src={Zeit48} alt="icon" />
                </div>
            </div>
        </Skills>
    ); 
};

export default skills;