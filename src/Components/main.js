import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import Skills from "./skills";
import Styled from "styled-components";


const Main = Styled.div`
    position: relative;

    .heading {
        padding: 100px 48px;
        background-color: #ffcc99;
        color: white;

        .greeting {
            font-weight: bold;
        }

        p {
            font-size: 48px;
        }
    }

    .projects {
        height: 300px;
        margin-top: 24px;
        background-color: gray;
        text-align: center;
        color: white;
    }

`;

const main = () => {
    return (
        <>
            <Nav />
            <Main>
                <section className="heading">
                    <p className="greeting">Hey there.</p>
                    <p>Adam is the name.</p>
                    <p>Web development is the game.</p>
                </section>
                <Skills />
                <div className="projects">
                    <h2>Recent Works</h2>
                </div>
            </Main>
            <Footer />
        </>
    );
};

export default main;