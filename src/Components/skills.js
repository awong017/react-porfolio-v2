import React from "react";
import Styled from "styled-components";

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
            </div>
            <div className="front-end">
                <h2 className="skills-heading">Front End</h2>
            </div>
            <div className="back-end">
                <h2 className="skills-heading">Back End</h2>
            </div>
            <div className="additional">
                <h2 className="skills-heading">Additional Tools</h2>
            </div>
        </Skills>
    ); 
};

export default skills;