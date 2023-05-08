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
                        transition={{
                            duration: .2,
                        }}
                        whileHover={{
                            rotate: -10
                        }}
                    ><NavLink className="primary-color" to="/">Home</NavLink></motion.li>
                    <motion.li
                        transition={{
                            duration: .2,
                        }}
                        whileHover={{
                            rotate: -10
                        }}><NavLink className="primary-color" to="/resume">Resume</NavLink></motion.li>
                    <motion.li transition={{
                        duration: .2,
                    }}
                        whileHover={{
                            rotate: -10
                        }}><NavLink className="primary-color" to="/portfolio">Portfolio</NavLink></motion.li>
                    <motion.li transition={{
                        duration: .2,
                    }}
                        whileHover={{
                            rotate: -10
                        }}><NavLink className="primary-color" to="/contact">Contact</NavLink></motion.li>
                </ul>
                <ul id="nav-mobile" className="sidenav">
                    <li><NavLink className="primary-color" to="/">Home</NavLink></li>
                    <li><NavLink className="primary-color" to="/resume">Resume</NavLink></li>
                    <li><NavLink className="primary-color" to="/services">Services</NavLink></li>
                    <li><NavLink className="primary-color" to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink className="primary-color" to="/contact">Contact</NavLink></li>
                </ul>
                <Link to="/" data-target="nav-mobile" className="sidenav-trigger primary-color"><i className="material-icons">menu</i></Link>
            </div>
        </nav>
    );
}

export { Header }