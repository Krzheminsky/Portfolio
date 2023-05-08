import React, { useEffect, useState } from "react";

import { motion } from "framer-motion"

import Html from '../../images/skills/html.png'
import Css from '../../images/skills/css.png'
import Sass from '../../images/skills/sass.png'
import Js from '../../images/skills/javascript.png'
import Reac from '../../images/skills/react.png'
import Redu from '../../images/skills/redux.png'
import Dart from '../../images/skills/dart.png'
import Flutter from '../../images/skills/flutter.png'
import Ts from '../../images/skills/ts.png'
import wp from '../../images/skills/wp.png'
import bootstrsp from '../../images/skills/bootstrap.png'
import gulp from '../../images/skills/gulp.png'
import firebase from '../../images/skills/firebase.png'
import git from '../../images/skills/git.png'
import github from '../../images/skills/github.png'
import sql from '../../images/skills/sql.png'
import php from '../../images/skills/php.png'
import npm from '../../images/skills/npm.png'
import jso from '../../images/skills/json.png'
import jira from '../../images/skills/jira.png'
import photo from '../../images/skills/photoshop.png'
import figma from '../../images/skills/figma.png'
import framer from '../../images/skills/framer-motion.png'


import '../../App.css'
import { Others } from "./components/Others";
import { Technologies } from "./components/Technologies";


function Resume() {



    return (
        < section className='resume z-depth-4' >
            <div className='header' >
                <div className="row" style={{ marginBottom: '0px' }}>

                    <div className="col s12 title" >
                        <div className="title-about">
                            <h1 style={{ margin: '0px auto' }}>Resume</h1>
                        </div>



                    </div>
                </div>
            </div>
            <div className='context'>
                <div className="row" >
                    <div className="tech col s12">
                        <div className='ebout-my primary-color'>
                            <div className='bl-title'>
                                <motion.h3
                                    initial={{
                                        // x: 450,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        // x: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 1,
                                        duration: 1.8,
                                    }}
                                    style={{ marginBottom: '0px' }}

                                >Tech I <span className='secondary-color'>Use</span>
                                </motion.h3>
                            </div>

                            <motion.div
                                style={{
                                    height: '4px',
                                    backgroundColor: '#2eca7f',
                                    borderRadius: '2px',
                                }}
                                initial={{
                                    width: '0px',
                                    opacity: 0,
                                }}
                                animate={{
                                    width: '100px',
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1,
                                }}

                            >
                            </motion.div>
                        </div>
                        <div className="my-card">
                            <motion.h6
                                whileInView={{
                                    x: 0,
                                    opacity: 1
                                }}
                                initial={{
                                    x: 450,
                                    opacity: 0,
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.5,
                                }}
                                className="primary-color">These are the technologies I use to build applications.</motion.h6>

                            <div className="resume-links" >

                                <Technologies />

                            </div>
                        </div>


                        <div className="my-card">
                            <motion.h6
                                whileInView={{
                                    x: 0,
                                    opacity: 1
                                }}
                                initial={{
                                    x: 450,
                                    opacity: 0,
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.5,
                                }}
                                className="primary-color">Others... and more!</motion.h6>
                            <div className="resume-links" >

                                <Others />

                            </div>
                        </div>
                    </div>

                    <div className="what-i-can-do col s12">

                        <div className='ebout-my primary-color'>
                            <div className='bl-title'>
                                <motion.h3
                                    whileInView={{
                                        y: 0,
                                        rotateX: 0,
                                        opacity: 1
                                    }}

                                    initial={{
                                        y: -30,
                                        rotateX: 180,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        delay: 1,
                                        duration: 1.8,
                                    }}
                                    style={{ marginBottom: '0px', display: 'inline-block' }}

                                >What I<span className='secondary-color'> Can Do</span>
                                </motion.h3>
                            </div>

                            <motion.div
                                style={{
                                    height: '4px',
                                    backgroundColor: '#2eca7f',
                                    borderRadius: '2px',
                                }}
                                initial={{
                                    width: '0px',
                                    opacity: 0,
                                }}
                                whileInView={{
                                    width: '136px',
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1,
                                }}>
                            </motion.div>

                            <div className="col s12 m6 i-do" style={{ paddingLeft: '0px' }}  >
                                <div className="my-card">
                                    <h6>
                                        Frontend apps
                                    </h6>
                                    <p>Build client-side applications with modern features like SPA and maintain semantic coding style among other best practices for SEO optimisation. Use modern tech such as React (React.js), Bootstrap and Framer Motion.</p>
                                </div>


                            </div>

                            <div className="col s12 m6 i-do" style={{ paddingRight: '0px' }}>

                                <div className="my-card">
                                    <h6>
                                        Native apps
                                    </h6>
                                    <p>
                                        Use Flutter to build and maintain mobile apps that run on both Android and iOS, as well as interactive apps that you want to run on your web pages or desktop. Flutter is modern, fast, cross-platform and popular.
                                    </p>
                                </div>


                            </div>
                        </div>

                    </div>


                    <div className="education-experience col s12">
                        <div className="col s12 m6 education" style={{ paddingLeft: '0px' }}>
                            <div className='ebout-my primary-color'>
                                <div className='bl-title'>
                                    <motion.h3
                                        whileInView={{
                                            y: 0,
                                            rotateX: 0,
                                            opacity: 1
                                        }}

                                        initial={{
                                            y: -30,
                                            rotateX: 180,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            delay: 1,
                                            duration: 1.8,
                                        }}
                                        style={{ marginBottom: '0px', display: 'inline-block' }}

                                    >Educa<span className='secondary-color'>tion</span>
                                    </motion.h3>
                                </div>

                                <motion.div
                                    style={{
                                        height: '4px',
                                        backgroundColor: '#2eca7f',
                                        borderRadius: '2px',
                                    }}
                                    initial={{
                                        width: '0px',
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        width: '98px',
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 2,
                                        duration: 1,
                                    }}>
                                </motion.div>


                            </div>
                            <div className="my-card primary-color">

                                <motion.div
                                    className="education-card"
                                    whileInView={{
                                        opacity: 1,
                                        rotateY: 0,
                                    }}

                                    initial={{
                                        opacity: 0,
                                        rotateY: 90,
                                    }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 1.2,
                                    }}
                                >
                                    <h6>
                                        Atom online university
                                    </h6>
                                    <p>
                                        Design Basics, Analytics Setup, SEO Setup, animation, creation of sites for a technical task, prototyping, site adaptation for different types of devices, upgrading sites, working with code
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="education-card"
                                    whileInView={{
                                        opacity: 1,
                                        rotateY: 0,
                                    }}

                                    initial={{
                                        opacity: 0,
                                        rotateY: 90,
                                    }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 1.2,
                                    }}
                                >
                                    <h6>
                                        Kharkiv Polytechnic Institute
                                    </h6>
                                    <p>
                                        Mechanical engineer
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="education-card"
                                    whileInView={{
                                        opacity: 1,
                                        rotateY: 0,
                                    }}

                                    initial={{
                                        opacity: 0,
                                        rotateY: 90,
                                    }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 1.2,
                                    }}
                                >
                                    <h6>
                                        Sumy Mechanical Engineering College
                                    </h6>
                                    <p>
                                        Technologist technician</p>
                                </motion.div>












                            </div>
                        </div>
                        <div className="col s12 m6 experience" style={{ paddingRight: '0px' }}>
                            <div className='ebout-my primary-color'>
                                <div className='bl-title'>
                                    <motion.h3
                                        whileInView={{
                                            opacity: 1,
                                            rotateY: 0,
                                        }}
                                        initial={{
                                            rotateY: 90,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            delay: 1,
                                            duration: 1.8,
                                        }}
                                        style={{ marginBottom: '0px', display: 'inline-block' }}
                                    >Experi<span className='secondary-color'>ence</span>
                                    </motion.h3>
                                </div>

                                <motion.div
                                    style={{
                                        height: '4px',
                                        backgroundColor: '#2eca7f',
                                        borderRadius: '2px',
                                    }}
                                    initial={{
                                        width: '0px',
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        width: '107px',
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 2,
                                        duration: 1,
                                    }}>
                                </motion.div>
                                <div className="my-card">
                                    <motion.div
                                        className="education-card"
                                        whileInView={{
                                            opacity: 1,
                                            rotateY: 0,
                                        }}

                                        initial={{
                                            opacity: 0,
                                            rotateY: 90,
                                        }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 1.2,
                                        }}
                                    >
                                        <h6>
                                            Freelancer
                                        </h6>
                                        <p>
                                            Experienced in HTML, CSS, JavaScript and other relevant tools, I am passionate about developing beautiful, responsive and user-friendly websites that engage audiences and drive success
                                        </p>
                                    </motion.div>


                                    <motion.div
                                        className="education-card"
                                        whileInView={{
                                            opacity: 1,
                                            rotateY: 0,
                                        }}

                                        initial={{
                                            opacity: 0,
                                            rotateY: 90,
                                        }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 1.2,
                                        }}
                                    >
                                        <h6>
                                            Protection of the population
                                        </h6>
                                        <p>
                                            Head of the educational and methodical center
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        className="education-card"
                                        whileInView={{
                                            opacity: 1,
                                            rotateY: 0,
                                        }}

                                        initial={{
                                            opacity: 0,
                                            rotateY: 90,
                                        }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 1.2,
                                        }}
                                    >
                                        <h6>
                                            State Service of Ukraine for Emergency Situations
                                        </h6>
                                        <p>
                                            Сomprehensive information protection system</p>
                                    </motion.div>
                                </div>

                            </div>
                        </div>


                    </div>





                    {/* <div className="col s12 m6 l6 photo" >
                        <div className='ebout-my primary-color'>
                            <div className='bl-title'>
                                <h3>About <span className='secondary-color'>Me </span>
                                </h3>
                            </div>
                            <p>
                                Hello, my name is Victor Krzheminsky, and I'm a freelance frontend developer. With my experience in HTML, CSS, JavaScript, and other relevant tools, I'm passionate about designing beautiful, responsive, and user-friendly websites that engage audiences and drive business success. Whether you're a startup or a well-established business, I'm here to help you develop the online presence you need to succeed. So if you're looking for a reliable and creative frontend developer to help bring your ideas to life, let's chat! Together, we can build something truly great.
                            </p>

                        </div>
                        <div className='download-resume'>

                        </div>
                    </div> */}
                    {/* <div className="col s12 m6 l6 " >
                        <div className='about primary-color'>

                            <div className="progress">
                                <div className="determinate" style={{ width: progress1 + '%' }}></div>
                            </div>
                            <div className="progress">
                                <div className="determinate proba" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className='add-resume'>
                            <a className="waves-effect waves-purple btn">Download Resume</a>
                        </div>

                    </div> */}

                </div>
            </div>
        </section >
    );

}

export { Resume }