import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion"
import Map from './components/Map.js'
import ContactForm from './components/ContactForm.js'
import ContactFormU from "./components/ContactFormU.js";

function ContactU() {


    return (

        < section className='contact z-depth-4' >
            <div className='header' >
                <div className="row" style={{ marginBottom: '0px' }}>
                    <div className="col s12 title" >
                        <div className="title-about">
                            <h1 style={{ margin: '0px auto' }}>Контакти</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='context'>
                <div className="row" >
                    <div className="get-in-touch col s12 m6">
                        <div className='ebout-my primary-color'>
                            <div className='bl-title'>
                                <motion.h3
                                    whileInView={{
                                        x: 0,
                                        opacity: 1
                                    }}

                                    initial={{
                                        x: 250,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        delay: 1,
                                        duration: 1,
                                    }}
                                    style={{ marginLeft: '10px', marginBottom: '0px', display: 'inline-block' }}

                                >Будемо на<span className='secondary-color'> зв'язку</span>
                                </motion.h3>
                            </div>
                            <motion.div
                                style={{
                                    marginLeft: '10px',
                                    height: '4px',
                                    backgroundColor: '#2eca7f',
                                    borderRadius: '2px',
                                }}
                                initial={{
                                    width: '0px',
                                    opacity: 0,
                                }}
                                whileInView={{
                                    width: '181px',
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1,
                                }}>
                            </motion.div>
                            <div className="col s12" >
                                <div className="my-card"
                                    style={{
                                        minHeight: '200px',
                                    }}>
                                    <Map />
                                </div>
                            </div>
                            <div className="col s12" >
                                <div className="my-card"
                                    style={{ minHeight: '156px', marginBottom: '10px' }}>
                                    <div className='primary-color'>
                                        <table className="striped highlight">
                                            <tbody>
                                                <tr>
                                                    <td className='contact'>
                                                        <i className="material-icons">location_on</i>
                                                    </td>
                                                    <td>Львів, Україна</td>
                                                </tr>
                                                <tr>
                                                    <td className='contact'>
                                                        <i className="material-icons">mail</i>
                                                    </td>
                                                    <td><a style={{ color: 'tomato' }} href="mailto:krzheminsky@ukr.net">
                                                        krzheminsky@ukr.net</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='contact'>
                                                        <i className="material-icons">phone</i>

                                                    </td>
                                                    <td>+380 669 384 743</td>
                                                </tr>
                                                <tr>
                                                    <td className='contact'>
                                                        <i className="material-icons">done</i>
                                                    </td>
                                                    <td>Фріланс доступний</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="contact-form col s12 m6"  >
                        <div className='ebout-my primary-color'>
                            <div className='bl-title'>
                                <motion.h3
                                    whileInView={{
                                        x: 0,
                                        opacity: 1
                                    }}
                                    initial={{
                                        x: 250,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        delay: 1,
                                        duration: 1,
                                    }}
                                    style={{ marginLeft: '10px', marginBottom: '0px', display: 'inline-block' }}
                                >Контактна<span className='secondary-color'> форма</span>
                                </motion.h3>
                            </div>
                            <motion.div
                                style={{
                                    marginLeft: '10px',
                                    height: '4px',
                                    backgroundColor: '#2eca7f',
                                    borderRadius: '2px',
                                }}
                                initial={{
                                    width: '0px',
                                    opacity: 0,
                                }}
                                whileInView={{
                                    width: '173px',
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1,
                                }}>
                            </motion.div>
                            <div className="col s12" >
                                <div className="my-card"
                                    style={{
                                        minHeight: '406px',
                                        marginBottom: '10px'
                                    }}>
                                    <ContactFormU />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export { ContactU }