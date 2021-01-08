import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const Xpense = Styled.div`
    color: black;
`

const xpense = () => {
    return (
        <Xpense>
            <h1>Xpense Component</h1>
        </Xpense>
    );
};

export default xpense;