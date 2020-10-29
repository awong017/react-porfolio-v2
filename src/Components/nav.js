import React from "react";
import Styled from "styled-components";

const Nav = Styled.div`
    text-align: center;
    color: gray;
`;

const nav = () => {
    return (
        <Nav>
            <h2>Nav Component</h2>
        </Nav>
    );
};

export default nav;