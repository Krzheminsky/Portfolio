import { Link, NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from 'react'
import './Header.css';
import { motion } from "framer-motion"

function Header() {

    useEffect(() => {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }, [])


    const lineHome = {
        initial: { width: 0 },
        animate: { width: '42px' },
    }
    const lineResume = {
        initial: { width: 0 },
        animate: { width: '54px' },
    }
    const linePortfolio = {
        initial: { width: 0 },
        animate: { width: '58px' },
    }
    const lineContact = {
        initial: { width: 0 },
        animate: { width: '53px' },
    }

    return (
        <nav className="white" role="navigation">
            <div className="nav-wrapper ">
                <Link to="/"
                    className="brand-logo secondary-color"
                    id="logo-container"
                    style={{ marginLeft: '10px' }} >
                    Victor <span className="primary-color">Krzheminsky</span></Link>
                <ul className="right hide-on-med-and-down nav-container">
                    <motion.li
                        style={{ position: 'relative' }}
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                    ><NavLink className="primary-color" to="/">Home</NavLink>
                        <motion.div className='line'
                            variants={lineHome}
                        ></motion.div>
                    </motion.li>
                    <motion.li
                        style={{ position: 'relative' }}
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                    ><NavLink className="primary-color" to="/resume">Resume</NavLink>
                        <motion.div className='line'
                            variants={lineResume}
                        ></motion.div>
                    </motion.li>
                    <motion.li
                        style={{ position: 'relative' }}
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                    ><NavLink className="primary-color" to="/portfolio">Portfolio</NavLink>
                        <motion.div className='line'
                            variants={linePortfolio}
                        ></motion.div>
                    </motion.li>
                    <motion.li
                        style={{ position: 'relative' }}
                        initial="initial"
                        animate="initial"
                        whileHover="animate"
                    ><NavLink className="primary-color" to="/contact">Contact</NavLink>
                        <motion.div className='line'
                            variants={lineContact}
                        ></motion.div>

                    </motion.li>
                </ul>
                <ul id="nav-mobile" className="sidenav">
                    <li><NavLink className="primary-color" to="/">Home</NavLink></li>
                    <li><NavLink className="primary-color" to="/resume">Resume</NavLink></li>
                    <li><NavLink className="primary-color" to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink className="primary-color" to="/contact">Contact</NavLink></li>
                </ul>
                <Link to="/" data-target="nav-mobile" className="sidenav-trigger primary-color"><i className="material-icons">menu</i></Link>
            </div>
        </nav>
    );
}

export { Header }