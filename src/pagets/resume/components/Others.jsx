import { motion } from "framer-motion"

import bootstrsp from '../../../images/skills/bootstrap.png'
import gulp from '../../../images/skills/gulp.png'
import firebase from '../../../images/skills/firebase.png'
import git from '../../../images/skills/git.png'
import github from '../../../images/skills/github.png'
import sql from '../../../images/skills/sql.png'
import npm from '../../../images/skills/npm.png'
import jso from '../../../images/skills/json.png'
import jira from '../../../images/skills/jira.png'
import photo from '../../../images/skills/photoshop.png'
import figma from '../../../images/skills/figma.png'
import framer from '../../../images/skills/framer-motion.png'
import mysql from '../../../images/skills/mysql.png'

function Others() {

    return (
        <>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://getbootstrap.com/">
                <motion.img
                    className='links'
                    src={bootstrsp}
                    alt='bootstrap'
                    title='bootstrap'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                /> </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://gulpjs.com/">
                <motion.img
                    className='links'
                    src={gulp}
                    alt='gulp'
                    title='gulp'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://firebase.google.com/">
                <motion.img
                    className='links'
                    src={firebase}
                    alt='irebase'
                    title='firebase'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://git-scm.com/">
                <motion.img
                    className='links'
                    src={git}
                    alt='git'
                    title='git'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                /> </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://github.com/">
                <motion.img
                    className='links'
                    src={github}
                    alt='github'
                    title='github'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://www.npmjs.com/">
                <motion.img
                    className='links'
                    src={npm}
                    alt='npm'
                    title='npm'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://www.mysql.com/">
                <motion.img
                    className='links'
                    src={mysql}
                    alt='mySql'
                    title='mySQL'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/JSON">
                <motion.img
                    className='links'
                    src={jso}
                    alt='JSON'
                    title='json'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://www.atlassian.com/ru/software/jira">
                <motion.img
                    className='links'
                    src={jira}
                    alt='Jira'
                    title='Jira'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://www.figma.com/">
                <motion.img
                    className='links'
                    src={figma}
                    alt='Figma'
                    title='Figma'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://www.adobe.com/ru/products/photoshop.html">
                <motion.img
                    className='links'
                    src={photo}
                    alt='Photoshop'
                    title='Photoshop'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://www.framer.com/motion/">
                <motion.img
                    className='links'
                    src={framer}
                    alt='Framer Motion'
                    title='Framer Motion'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
        </>
    )
}

export { Others }