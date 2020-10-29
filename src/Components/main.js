import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import Styled from "styled-components";


const Main = Styled.div`
    position: relative;

    .heading {
        padding: 48px;
        background-color: #ffcc99;
        color: white;

        .greeting {
            font-weight: bold;
        }

        p {
            font-size: 48px;
        }
    }

    .skills {
        position: relative;
        height: 600px;
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
            top: 24px;
            border: 1px solid gray;
        }

        .front-end {
            top: 300px;
            left: 352px;
            background-color: gray;
            color: white;
        }

        .back-end {
            top: 24px;
            left: 704px;
            background-color: #ffcc99;
            color: white;
        }

        .additional {
            top: 300px;
            left: 1056px;
            border: 1px solid gray;
            background-color: white;
            color: gray;
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
                <section className="skills">
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
                </section>
                <div className="projects">
                    <h2>Recent Works</h2>
                </div>
            </Main>
            <Footer />
        </>
    );
};

export default main;