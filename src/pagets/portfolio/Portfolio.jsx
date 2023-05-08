
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
    const [status9, setStatus9] = useState(false);
    const [currentWidthWeb, setCurrentWidthWeb] = useState(0);
    const [currentHeightWeb, setCurrentHeihgtWeb] = useState(0);
    const [currentWidth, setCurrentWidth] = useState(0);
    const [currentHeight, setCurrentHeihgt] = useState(0);

    const refComponent = createRef();
    const refComponentWeb = createRef();

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
                                        x: 450,
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
                            <div className="col s12 m6 i-do">
                                <div
                                    ref={refComponentWeb}
                                    className="my-card"
                                    style={{ position: 'relative', maxHeight: '230px' }}
                                    onMouseEnter={(e) => {
                                        onMouseEnterAll(e);
                                        setStatus1(true);
                                    }}
                                    onMouseLeave={(e) => {
                                        onMouseLeaveAll(e);
                                        setStatus1(false);
                                    }}>
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
                                        style={{ width: '100%', display: 'block', }} src={forecast} alt="forecast" />
                                    <Transition
                                        initial={null}
                                        items={status1}
                                        from={statusEnterWeb()}
                                        enter={{ height: currentHeightWeb, width: currentWidthWeb, opacity: 0.8, left: 0, top: 0 }}
                                        leave={statusLeaveWeb()}
                                        config={config.default}
                                    >
                                        {(item) =>
                                            item &&
                                            ((style) => (
                                                <a className="nav-link " target="_blank" rel="noreferrer" href="http://forecast.inf.ua/">
                                                    <div className="overlay"
                                                        style={{ ...style }}>
                                                        <div className="text" style={{ height: currentHeightWeb }}>
                                                            <h5 >Forecsat</h5>
                                                            <p style={{ position: 'absolute', bottom: '0px' }}>
                                                                forecasting the possible consequences of an accident at chemically hazardous facilities</p></div>
                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </Transition>
                                </div>
                            </div>
                            <div className="col s12 m6 i-do">
                                <div
                                    ref={refComponentWeb}
                                    className="my-card"
                                    style={{ position: 'relative' }}
                                    onMouseEnter={(e) => {
                                        onMouseEnterAll(e);
                                        setStatus2(true);
                                    }}
                                    onMouseLeave={(e) => {
                                        onMouseLeaveAll(e);
                                        setStatus2(false);
                                    }}>
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
                                            duration: 0.5,
                                        }}
                                        style={{ width: '100%', display: 'block', }} src={nuclear} alt="nuclear" />
                                    <Transition
                                        initial={null}
                                        items={status2}
                                        from={statusEnterWeb()}
                                        enter={{ height: currentHeightWeb, width: currentWidthWeb, opacity: 0.8, left: 0, top: 0 }}
                                        leave={statusLeaveWeb()}
                                        config={config.default}
                                    >
                                        {(item) =>
                                            item &&
                                            ((style) => (
                                                <a className="nav-link " target="_blank" rel="noreferrer" href="http://nuclearsimulation.inf.ua">
                                                    <div className="overlay"
                                                        style={{ ...style }}>
                                                        <div className="text" style={{ height: currentHeightWeb }}>
                                                            <h5 >Nuclear Simulation</h5>
                                                            <p style={{ position: 'absolute', bottom: '0px' }}>
                                                                simulation of impact factors of a nuclear explosion</p></div>

                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </Transition>
                                </div>
                            </div>

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
                            <div className="col s12 m4 i-do">
                                <div
                                    ref={refComponent}
                                    className="my-card"
                                    style={{ minHeight: '100px', position: 'relative' }}
                                    onMouseEnter={(e) => {
                                        onMouseEnterAll(e);
                                        setStatus3(true);
                                    }}
                                    onMouseLeave={(e) => {
                                        onMouseLeaveAll(e);
                                        setStatus3(false);
                                    }}>
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
                                        style={{ width: '100%', display: 'block', }} src={magic} alt="Magic Ball" />
                                    <Transition
                                        initial={null}
                                        items={status3}
                                        from={statusEnter()}
                                        enter={{ height: currentHeight, width: currentWidth, opacity: 0.8, left: 0, top: 0 }}
                                        leave={statusLeave()}
                                        config={config.default}
                                    >
                                        {(item) =>
                                            item &&
                                            ((style) => (
                                                <a className="nav-link " target="_blank" rel="noreferrer" href="https://github.com/Krzheminsky/Magic_Ball">
                                                    <div className="overlay"
                                                        style={{ ...style }}>
                                                        <div className="text" style={{ height: currentHeight }}>
                                                            <h5 >Magic Ball</h5>
                                                            <p style={{ position: 'absolute', top: '100px' }}>
                                                                what would you take away, it’s necessary to put power, or in your own voice, push it on the sack</p></div>

                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </Transition>
                                </div>
                            </div>
                            <div className="col s12 m4 i-do">
                                <div
                                    ref={refComponent}
                                    className="my-card"
                                    style={{ minHeight: '100px', position: 'relative' }}
                                    onMouseEnter={(e) => {
                                        onMouseEnterAll(e);
                                        setStatus4(true);
                                    }}
                                    onMouseLeave={(e) => {
                                        onMouseLeaveAll(e);
                                        setStatus4(false);
                                    }}>
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
                                        style={{ width: '100%', display: 'block', }} src={nativForecast} alt="Forecast" />
                                    <Transition
                                        initial={null}
                                        items={status4}
                                        from={statusEnter()}
                                        enter={{ height: currentHeight, width: currentWidth, opacity: 0.8, left: 0, top: 0 }}
                                        leave={statusLeave()}
                                        config={config.default}
                                    >
                                        {(item) =>
                                            item &&
                                            ((style) => (
                                                <a className="nav-link " target="_blank" rel="noreferrer" href="http://forecast.inf.ua/app-release.apk">
                                                    <div className="overlay"
                                                        style={{ ...style }}>
                                                        <div className="text" style={{ height: currentHeight }}>
                                                            <h5 >Forecast</h5>
                                                            <p style={{ position: 'absolute', top: '100px' }}>
                                                                forecasting the possible consequences of an accident at chemically hazardous facilities</p></div>

                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </Transition>
                                </div>
                            </div>
                            <div className="col s12 m4 i-do">
                                <div
                                    ref={refComponent}
                                    className="my-card"
                                    style={{ minHeight: '100px', position: 'relative' }}
                                    onMouseEnter={(e) => {
                                        onMouseEnterAll(e);
                                        setStatus5(true);
                                    }}
                                    onMouseLeave={(e) => {
                                        onMouseLeaveAll(e);
                                        setStatus5(false);
                                    }}>
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
                                        style={{ width: '100%', display: 'block', }} src={recipe} alt="recipe" />
                                    <Transition
                                        initial={null}
                                        items={status5}
                                        from={statusEnter()}
                                        enter={{ height: currentHeight, width: currentWidth, opacity: 0.8, left: 0, top: 0 }}
                                        leave={statusLeave()}
                                        config={config.default}
                                    >
                                        {(item) =>
                                            item &&
                                            ((style) => (
                                                <a className="nav-link " target="_blank" rel="noreferrer" href="https://github.com/Krzheminsky/CookingCalc">
                                                    <div className="overlay"
                                                        style={{ ...style }}>
                                                        <div className="text" style={{ height: currentHeight }}>
                                                            <h5 >Galician Recipes</h5>
                                                            <p style={{ position: 'absolute', top: '100px' }}>
                                                                revisited savory old-fashioned and modern recipes for those who love to eat and cook</p></div>

                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </Transition>
                                </div>
                            </div>
                            <div className="col s12 m4 i-do">
                                <div
                                    ref={refComponent}
                                    className="my-card"
                                    style={{ minHeight: '100px', position: 'relative' }}
                                    onMouseEnter={(e) => {
                                        onMouseEnterAll(e);
                                        setStatus6(true);
                                    }}
                                    onMouseLeave={(e) => {
                                        onMouseLeaveAll(e);
                                        setStatus6(false);
                                    }}>
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
                                        style={{ width: '100%', display: 'block', }} src={nativPrognosis} alt="prognosis" />
                                    <Transition
                                        initial={null}
                                        items={status6}
                                        from={statusEnter()}
                                        enter={{ height: currentHeight, width: currentWidth, opacity: 0.8, left: 0, top: 0 }}
                                        leave={statusLeave()}
                                        config={config.default}
                                    >
                                        {(item) =>
                                            item &&
                                            ((style) => (
                                                <a className="nav-link " target="_blank" rel="noreferrer" href="https://">
                                                    <div className="overlay"
                                                        style={{ ...style }}>
                                                        <div className="text" style={{ height: currentHeight }}>
                                                            <h5 >Prognosis</h5>
                                                            <p style={{ position: 'absolute', top: '100px' }}>
                                                                forecast of recent stagnation of combat toxic chemical speeches</p></div>

                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </Transition>
                                </div>
                            </div>
                            <div className="col s12 m4 i-do">
                                <div
                                    ref={refComponent}
                                    className="my-card"
                                    style={{ minHeight: '100px', position: 'relative' }}
                                    onMouseEnter={(e) => {
                                        onMouseEnterAll(e);
                                        setStatus7(true);
                                    }}
                                    onMouseLeave={(e) => {
                                        onMouseLeaveAll(e);
                                        setStatus7(false);
                                    }}>
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
                                        style={{ width: '100%', display: 'block', }} src={cooking} alt="Cooking Calc" />
                                    <Transition
                                        initial={null}
                                        items={status7}
                                        from={statusEnter()}
                                        enter={{ height: currentHeight, width: currentWidth, opacity: 0.8, left: 0, top: 0 }}
                                        leave={statusLeave()}
                                        config={config.default}
                                    >
                                        {(item) =>
                                            item &&
                                            ((style) => (
                                                <a className="nav-link " target="_blank" rel="noreferrer" href="https://github.com/Krzheminsky/CookingCalc">
                                                    <div className="overlay"
                                                        style={{ ...style }}>
                                                        <div className="text" style={{ height: currentHeight }}>
                                                            <h5 >Kitchen Calculator</h5>
                                                            <p style={{ position: 'absolute', top: '100px' }}>
                                                                the given weight and volume of various ingredients</p></div>

                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </Transition>
                                </div>
                            </div>
                            <div className="col s12 m4 i-do">
                                <div
                                    ref={refComponent}
                                    className="my-card"
                                    style={{ minHeight: '100px', position: 'relative' }}
                                    onMouseEnter={(e) => {
                                        onMouseEnterAll(e);
                                        setStatus8(true);
                                    }}
                                    onMouseLeave={(e) => {
                                        onMouseLeaveAll(e);
                                        setStatus8(false);
                                    }}>
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
                                        style={{ width: '100%', display: 'block', }} src={nativNuclear} alt="nuclear" />
                                    <Transition
                                        initial={null}
                                        items={status8}
                                        from={statusEnter()}
                                        enter={{ height: currentHeight, width: currentWidth, opacity: 0.8, left: 0, top: 0 }}
                                        leave={statusLeave()}
                                        config={config.default}
                                    >
                                        {(item) =>
                                            item &&
                                            ((style) => (
                                                <a className="nav-link " target="_blank" rel="noreferrer" href="http://nuclearsimulation.inf.ua/app-release.apk">
                                                    <div className="overlay"
                                                        style={{ ...style }}>
                                                        <div className="text" style={{ height: currentHeight }}>
                                                            <h5 >Nuclear Simulation</h5>
                                                            <p style={{ position: 'absolute', top: '100px' }}>
                                                                simulation of impact factors of a nuclear explosion</p></div>

                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}

export { Portfolio }