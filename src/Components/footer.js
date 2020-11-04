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
    }
`;

const footer = () => {
    return (
        <Footer>
            <ul className="contact">
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>Email</li>
            </ul>
            <p>2020, Adam Wong. Built with React</p>
        </Footer>
    );
};

export default footer;