import React from "react";
import Styled from "styled-components";

const Footer = Styled.div`
    margin-top: 48px;
    text-align: center;
    color: gray;

    .contact {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        margin: auto;
        border: 2px solid black;
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
                <li><a href="https://www.linkedin.com/in/adambwong/">LinkedIn</a></li>
                <li><a href="https://github.com/awong017">GitHub</a></li>
                <li><a href="mailto:adamwthedev@gmail.com">Email</a></li>
            </ul>
            <p>2020, Adam Wong. Built with React</p>
        </Footer>
    );
};

export default footer;