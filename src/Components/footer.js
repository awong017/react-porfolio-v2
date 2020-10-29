import React from "react";
import Styled from "styled-components";

const Footer = Styled.div`
    border-top: 2px solid gray;
    text-align: center;
    color: gray;
`;

const footer = () => {
    return (
        <Footer>
            <h2>Footer Component</h2>
        </Footer>
    );
};

export default footer;