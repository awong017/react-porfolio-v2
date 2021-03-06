import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const SmashUlt = Styled.div`
    margin-left: 24px;

    a {
        link-style: none;
        text-decoration: none;
        color: black;

        &:hover {
            text-decoration: underline;
        }
    }

    section {
        margin-bottom: 48px;
    }

    .intro {
        width: 50%;
    }

    .tech-list {
        list-style: none;
        padding-left: 0px;

        .tech-list-item {
            margin-bottom: 16px;

            .tech-label {
                font-weight: bold;
            }

            .tech-detail {
                display: inline;
            }
        }
    }
    
    .get-started {
        display: grid;
        grid-template-columns: repeat(2,50%);

        .get-started-list {
            list-style: none;
            padding-left: 0px;

            .get-started-list-item {
                margin-bottom: 16px;

                .get-started-label {
                    font-weight: bold;
                }

                .get-started-detail {
                    display: inline;
                }
            }
        }

        .get-started-pic {
            border: 2px solid black;
            text-align: center;
        }
    }

    .navigation-div {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        margin-bottom: 24px;

        .navigation-list {
            padding-left: 16px;

            .navigation-list-item {
                margin-bottom: 24px;
            }
        }

        .navigation-pic {
            border: 2px solid black;
            text-align: center;
        }
    }
`;

const smashUlt = () => {
    return (
        <SmashUlt>
            <Link to={"/"}>
                <p>/ Back</p>
            </Link>
            <section className="intro">
                <p>
                    Welcome to the Smash Ultimate Stats Tracker. 
                    This is an application that allows the user to track their progress 
                    for the game Super Smash Bros Ultimate by allowing the user to view 
                    their win percentage, see specific matchups, and get a glimpse of 
                    which characters they use the most.
                </p>
            </section>
            <section className="tech">
                <ul className="tech-list">
                    <li className="tech-list-item">
                        <label className="tech-label">Language: </label>
                        <p className="tech-detail">JavaScript</p>
                    </li>
                    <li className="tech-list-item">
                        <label className="tech-label">Front-End: </label>
                        <p className="tech-detail">React Hooks, styled components, HTML</p>
                    </li>
                    <li className="tech-list-item">
                        <label className="tech-label">Back-End: </label>
                        <p className="tech-detail">PostgreSQL, Express</p>
                    </li>
                    <li className="tech-list-item">
                        <label className="tech-label">Other: </label>
                        <p className="tech-detail">NPM, Node</p>
                    </li>
                    <li className="tech-list-item">
                        <label className="tech-label">Deployment: </label>
                        <p className="tech-detail">Vercel, Heroku</p>
                    </li>
                </ul>
            </section>
            <section className="get-started">
                <div>
                    <p>To get started, you may use the following login:</p>
                    <ul className="get-started-list">
                        <li className="get-started-list-item">
                            <label className="get-started-label">Username: </label>
                            <p className="get-started-detail">guest</p>
                        </li>
                        <li className="get-started-list-item">
                            <label className="get-started-label">Password: </label>
                            <p className="get-started-detail">welcome!</p>
                        </li>
                    </ul>
                </div>
                <div className="get-started-pic">
                    PICTURE HERE
                </div>
            </section>
            <section className="navigation">
                <p>Here is a list of all the application pages and their functions:</p>
                <div className="navigation-div">
                    <div className="navigation-landing">
                        <h2>Landing</h2>
                        <ul className="navigation-list">
                            <li className="navigation-list-item">
                                User can see latest posts on /r/smashbros from Reddit. Data is 
                                fetched from the Reddit API
                            </li>
                            <li className="navigation-list-item">
                                User can see who the top registered players are as well as 
                                see the top three characters with the most wins
                            </li>
                        </ul>
                    </div>
                    <div className="navigation-pic">
                        PICTURE HERE
                    </div>
                </div>
                <div className="navigation-div">
                    <div className="navigation-home">
                        <h2>Home</h2>
                        <ul className="navigation-list">
                            <li className="navigation-list-item">
                                First page that is seen after logging in and can be accessed by 
                                clicking on the smash ball icon on the nav bar
                            </li>
                            <li className="navigation-list-item">
                                Quick overview of user's overall stats
                            </li>
                        </ul>
                    </div>
                    <div className="navigation-pic">
                        PICTURE HERE
                    </div>
                </div>
                <div className="navigation-div">
                    <div className="navigation-add-stats">
                        <h2>Add Stats</h2>
                        <ul className="navigation-list">
                            <li className="navigation-list-item">
                                Page where user can add or subtract wins or losses for a specific 
                                character matchup
                            </li>
                            <li className="navigation-list-item">
                                To add stats, complete the following:
                                <ul>
                                    <li className="navigation-list-item">
                                        To select which character you want to change, begin by clicking 
                                        either the "Player" or "Opponent" avatar. The white border around 
                                        the avatar will indicate that its been selected
                                    </li>
                                    <li className="navigation-list-item">
                                        Next, select the character you desire from the "Character Select" 
                                        section
                                    </li>
                                    <li className="navigation-list-item">
                                        Lastly to add stats, simply click the "+" or "-" button to add or 
                                        subtract stats respectively
                                    </li>
                                </ul>
                            </li>
                            <li className="navigation-list-item">
                                Users can use the "View By" filter to filter character matches by a specific 
                                time frame
                                <ul>
                                    <li className="navigation-list-item">
                                        "Matchup History" is a history of the filtered matches
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="navigation-pic">
                        PICTURE HERE
                    </div>
                </div>
            </section>
        </SmashUlt>
    );
};

export default smashUlt;