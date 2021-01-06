import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const SmashUlt = Styled.div`
`;

const smashUlt = () => {
    return (
        <SmashUlt>
            <Link to={"/"}>
                <p>/ Back</p>
            </Link>
            <section className="Intro">
                <p>
                    Welcome to the Smash Ultimate Stats Tracker. 
                    This is an application that allows the user to track their progress 
                    for the game Super Smash Bros Ultimate by allowing the user to view 
                    their win percentage, see specific matchups, and get a glimpse of 
                    which characters they use the most.
                </p>
            </section>
            <section className="languages">
                <label>Language: </label>
                <p>JavaScript</p>
                <label>Front-End: </label>
                <p>React Hooks, styled components, HTML</p>
                <label>Back-End: </label>
                <p>PostgreSQL, Express</p>
                <label>Other: </label>
                <p>NPM, Node</p>
                <label>Deployment: </label>
                <p>Vercel, Heroku</p>
            </section>
            <section>
                <p>To get started, you may use the following login:</p>
                <label>Username: </label>
                <p>guest</p>
                <label>Password: </label>
                <p>welcome!</p>
            </section>
        </SmashUlt>
    );
};

export default smashUlt;