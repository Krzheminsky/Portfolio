import { useState, useEffect, createRef } from "react";
import React from "react";
import { Transition, config } from 'react-spring/renderprops';
import { motion } from "framer-motion"
import forecast from '../../images/forecast.png'
import nuclear from '../../images/nuclear.png'
import nativNuclear from '../../images/nativ-nuclear.jpg'
import nativForecast from '../../images/nativ-forecast.jpg'
import nativPrognosis from '../../images/nativ-prognosis.jpg'
import cooking from '../../images/cooking.jpg'
import recipe from '../../images/recipe.jpg'
import magic from '../../images/magic.jpg'

function Portfolio() {

    const [enterX, setEnterX] = useState(0);
    const [enterY, setEnterY] = useState(0);
    const [leaveX, setLeaveX] = useState(0);
    const [leaveY, setLeaveY] = useState(0);
    const [status1, setStatus1] = useState(false);
    const [status2, setStatus2] = useState(false);
    const [status3, setStatus3] = useState(false);
    const [status4, setStatus4] = useState(false);
    const [status5, setStatus5] = useState(false);
    const [status6, setStatus6] = useState(false);
    const [status7, setStatus7] = useState(false);
    const [status8, setStatus8] = useState(false);
    const [currentWidthWeb, setCurrentWidthWeb] = useState(0);
    const [currentHeightWeb, setCurrentHeihgtWeb] = useState(0);
    const [currentWidth, setCurrentWidth] = useState(0);
    const [currentHeight, setCurrentHeihgt] = useState(0);

    const refComponent = createRef();
    const refComponentWeb = createRef();

    const componentWeb = [
        {
            img: forecast,
            name: 'Forecast',
            item: status1,
            status: setStatus1,
            link: "http://forecast.inf.ua/",
            text: 'forecasting the possible consequences of an accident at chemically hazardous facilities'
        },
        {
            img: nuclear,
            name: 'Nuclear Simulation',
            item: status2,
            status: setStatus2,
            link: "http://nuclearsimulation.inf.ua",
            text: 'simulation of impact factors of a nuclear explosion'
        },
    ]

    const componentNativ = [
        {
            img: magic,
            name: 'Magic Ball',
            item: status3,
            status: setStatus3,
            link: "https://github.com/Krzheminsky/Magic_Ball",
            text: "what would you take away, it’s necessary to put power, or in your own voice, push it on the sack"
        },
        {
            img: nativForecast,
            name: 'Forecast',
            item: status4,
            status: setStatus4,
            link: "http://forecast.inf.ua/app-release.apk",
            text: 'forecasting the possible consequences of an accident at chemically hazardous facilities'
        },
        {
            img: recipe,
            name: 'Galician Recipes',
            item: status5,
            status: setStatus5,
            link: "https://github.com/Krzheminsky/CookingCalc",
            text: 'revisited savory old-fashioned and modern recipes for those who love to eat and cook'
        },
        {
            img: nativPrognosis,
            name: 'Prognosis',
            item: status6,
            status: setStatus6,
            link: "https://",
            text: 'forecast of recent stagnation of combat toxic chemical speeches'
        },
        {
            img: cooking,
            name: 'Kitchen Calculator',
            item: status7,
            status: setStatus7,
            link: "https://github.com/Krzheminsky/CookingCalc",
            text: 'the given weight and volume of various ingredients'
        },
        {
            img: nativNuclear,
            name: 'Nuclear Simulation',
            item: status8,
            status: setStatus8,
            link: "http://nuclearsimulation.inf.ua/app-release.apk",
            text: 'simulation of impact factors of a nuclear explosion'
        },
    ]



    useEffect(() => {
        setCurrentHeihgt(refComponent.current.clientHeight);
        setCurrentWidth(refComponent.current.clientWidth);
        setCurrentHeihgtWeb(refComponentWeb.current.clientHeight);
        setCurrentWidthWeb(refComponentWeb.current.clientWidth);
    }, [refComponent, refComponentWeb]);

    const onMouseEnterAll = (e) => {
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        setEnterX(x);
        setEnterY(y);
    };

    const onMouseLeaveAll = (e) => {
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        setLeaveX(x);
        setLeaveY(y);
    };

    const statusEnterWeb = () => {
        var w = currentWidthWeb,
            h = currentHeightWeb,
            x = enterX,
            y = enterY,
            xShift,
            yShift,
            xText,
            yText,
            itogText;
        if (x / w > .5) {
            xShift = w - x;
            xText = { height: currentHeightWeb, width: 0, left: currentWidthWeb, top: 0, opacity: 0 };  //right
        } else {
            xShift = x;
            xText = { height: currentHeightWeb, width: 0, left: 0, top: 0, opacity: 0 };  //left
        }
        if (y / h > .5) {
            yShift = h - y;
            yText = { height: 0, width: currentWidthWeb, left: 0, top: currentHeightWeb, opacity: 0 };  //bottom
        } else {
            yShift = y;
            yText = { height: 0, width: currentWidthWeb, left: 0, top: 0, opacity: 0 };  //top
        }
        itogText = (xShift < yShift) ? xText : yText;
        return itogText;
    }

    const statusLeaveWeb = () => {
        var w = currentWidthWeb,
            h = currentHeightWeb,
            x = leaveX,
            y = leaveY,
            xShift,
            yShift,
            xText,
            yText,
            itogText;
        if (x / w > .5) {
            xShift = w - x;
            xText = { height: currentHeightWeb, width: 0, left: currentWidthWeb, top: 0, opacity: 0 };  //right
        } else {
            xShift = x;
            xText = { height: currentHeightWeb, width: 0, left: 0, top: 0, opacity: 0 };  //left
        }
        if (y / h > .5) {
            yShift = h - y;
            yText = { height: 0, width: currentWidthWeb, left: 0, top: currentHeightWeb, opacity: 0 };  //bottom
        } else {
            yShift = y;
            yText = { height: 0, width: currentWidthWeb, left: 0, top: 0, opacity: 0 };  //top
        }
        itogText = (xShift < yShift) ? xText : yText;
        return itogText;
    }

    const statusEnter = () => {
        var w = currentWidth,
            h = currentHeight,
            x = enterX,
            y = enterY,
            xShift,
            yShift,
            xText,
            yText,
            itogText;
        if (x / w > .5) {
            xShift = w - x;
            xText = { height: currentHeight, width: 0, left: currentWidth, top: 0, opacity: 0 };  //right
        } else {
            xShift = x;
            xText = { height: currentHeight, width: 0, left: 0, top: 0, opacity: 0 };  //left
        }
        if (y / h > .5) {
            yShift = h - y;
            yText = { height: 0, width: currentWidth, left: 0, top: currentHeight, opacity: 0 };  //bottom
        } else {
            yShift = y;
            yText = { height: 0, width: currentWidth, left: 0, top: 0, opacity: 0 };  //top
        }
        itogText = (xShift < yShift) ? xText : yText;
        return itogText;
    }

    const statusLeave = () => {
        var w = currentWidth,
            h = currentHeight,
            x = leaveX,
            y = leaveY,
            xShift,
            yShift,
            xText,
            yText,
            itogText;
        if (x / w > .5) {
            xShift = w - x;
            xText = { height: currentHeight, width: 0, left: currentWidth, top: 0, opacity: 0 };  //right
        } else {
            xShift = x;
            xText = { height: currentHeight, width: 0, left: 0, top: 0, opacity: 0 };  //left
        }
        if (y / h > .5) {
            yShift = h - y;
            yText = { height: 0, width: currentWidth, left: 0, top: currentHeight, opacity: 0 };  //bottom
        } else {
            yShift = y;
            yText = { height: 0, width: currentWidth, left: 0, top: 0, opacity: 0 };  //top
        }
        itogText = (xShift < yShift) ? xText : yText;
        return itogText;
    }

    return (

        < section className='portfolio z-depth-4' >
            <div className='header' >
                <div className="row" style={{ marginBottom: '0px' }}>

                    <div className="col s12 title" >
                        <div className="title-about">
                            <h1 style={{ margin: '0px auto' }}>Portfolio</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='context'>
                <div className="row" >
                    <div className="web-applikation col s12">
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

                                >Web<span className='secondary-color'> Applications</span>
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
                                    width: '168px',
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1,
                                }}>
                            </motion.div>

                            {componentWeb.map(el => (
                                <div key={el.name} className="col s12 m6 i-do">
                                    <div
                                        ref={refComponentWeb}
                                        className="my-card"
                                        style={{ position: 'relative', maxHeight: '260px' }}
                                        onMouseEnter={(e) => (
                                            onMouseEnterAll(e),
                                            el.status(true)
                                        )}
                                        onMouseLeave={(e) => (
                                            onMouseLeaveAll(e),
                                            el.status(false)
                                        )}>
                                        <motion.img
                                            whileInView={{
                                                opacity: 1,
                                                rotateX: 0,
                                            }}
                                            initial={{
                                                opacity: 0,
                                                rotateX: 90,
                                            }}
                                            transition={{
                                                delay: 0.5,
                                                duration: .5,
                                            }}
                                            style={{ width: '100%', display: 'block', }} src={el.img} alt={el.name} />
                                        <Transition
                                            initial={null}
                                            items={el.item}
                                            from={statusEnterWeb()}
                                            enter={{ height: currentHeightWeb, width: currentWidthWeb, opacity: 0.8, left: 0, top: 0 }}
                                            leave={statusLeaveWeb()}
                                            config={config.default}
                                        >
                                            {(item) =>
                                                item &&
                                                ((style) => (
                                                    <a className="nav-link " target="_blank" rel="noreferrer" href={el.link}>
                                                        <div className="overlay"
                                                            style={{ ...style }}>
                                                            <div className="text" style={{ height: currentHeightWeb }}>
                                                                <h5 >{el.name}</h5>
                                                                <p style={{ position: 'absolute', bottom: '0px' }}>{el.text}</p></div>
                                                        </div>
                                                    </a>
                                                ))
                                            }
                                        </Transition>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="nativ-applikation col s12">
                        <div className='ebout-my primary-color'>
                            <div className='bl-title'>
                                <motion.h3
                                    whileInView={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    initial={{
                                        y: -50,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        delay: 1,
                                        duration: 1,
                                    }}
                                    style={{ marginLeft: '10px', marginBottom: '0px', display: 'inline-block' }}

                                >Nativ<span className='secondary-color'> Applications</span>
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
                                    width: '174px',
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1,
                                }}>
                            </motion.div>
                            {componentNativ.map(el => (
                                <div key={el.name} className="col s12 m4 i-do">
                                    <div
                                        ref={refComponent}
                                        className="my-card"
                                        style={{ minHeight: '100px', position: 'relative' }}
                                        onMouseEnter={(e) => (
                                            onMouseEnterAll(e),
                                            el.status(true)
                                        )}
                                        onMouseLeave={(e) => (
                                            onMouseLeaveAll(e),
                                            el.status(false)
                                        )}>
                                        <motion.img
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
                                                duration: 0.5,
                                            }}
                                            style={{ width: '100%', display: 'block', }} src={el.img} alt="Magic Ball" />
                                        <Transition
                                            initial={null}
                                            items={el.item}
                                            from={statusEnter()}
                                            enter={{ height: currentHeight, width: currentWidth, opacity: 0.8, left: 0, top: 0 }}
                                            leave={statusLeave()}
                                            config={config.default}
                                        >
                                            {(item) =>
                                                item &&
                                                ((style) => (
                                                    <a className="nav-link " target="_blank" rel="noreferrer" href={el.link}>
                                                        <div className="overlay"
                                                            style={{ ...style }}>
                                                            <div className="text" style={{ height: currentHeight }}>
                                                                <h5 >{el.name}</h5>
                                                                <p style={{ position: 'absolute', top: '100px' }}>{el.text}</p></div>
                                                        </div>
                                                    </a>
                                                ))
                                            }
                                        </Transition>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export { Portfolio }