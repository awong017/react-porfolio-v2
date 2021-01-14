import React from "react";
import Styled from "styled-components";
import LinkedIn48 from "../Images/linkedin-48.png";
import Github48 from "../Images/github-48.png";
import Email48 from "../Images/email-48.png";

const Footer = Styled.div`
    margin-top: 48px;
    text-align: center;
    color: gray;

    .contact {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        margin: auto;
        width: 400px;
        padding-left: 0;
        list-style: none;

        a {
            text-decoration: none;
            color: gray;
        }
    }
`;

const footer = () => {
    return (
        <Footer>
            <ul className="contact">
                <li><a href="https://www.linkedin.com/in/adambwong/"><img src={LinkedIn48} alt="linked-in" /></a></li>
                <li><a href="https://github.com/awong017"><img src={Github48} alt="github" /></a></li>
                <li><a href="mailto:adamwthedev@gmail.com"><img src={Email48} alt="email" /></a></li>
            </ul>
            <p>2020, Adam Wong. Built with React</p>
        </Footer>
    );
};

export default footer;