import { motion } from "framer-motion"

import Html from '../../../images/skills/html.png'
import Css from '../../../images/skills/css.png'
import Sass from '../../../images/skills/sass.png'
import Js from '../../../images/skills/javascript.png'
import Reac from '../../../images/skills/react.png'
import Redu from '../../../images/skills/redux.png'
import Dart from '../../../images/skills/dart.png'
import Flutter from '../../../images/skills/flutter.png'
import Ts from '../../../images/skills/ts.png'
import wp from '../../../images/skills/wp.png'
import php from '../../../images/skills/php.png'


function Technologies() {

    return (
        <>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <motion.img
                    className='links'
                    src={Html}
                    alt='html'
                    title='html'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                /> </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <motion.img
                    className='links'
                    src={Css}
                    alt='css'
                    title='css'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://sass-lang.com/">
                <motion.img
                    className='links'
                    src={Sass}
                    alt='sass'
                    title='sass'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <motion.img
                    className='links'
                    src={Js}
                    alt='JavaSript'
                    title='JavaSript'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                /> </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://www.typescriptlang.org/">
                <motion.img
                    className='links'
                    src={Ts}
                    alt='TypeSript'
                    title='TypeSript'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                /> </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://react.dev/">
                <motion.img
                    className='links'
                    src={Reac}
                    alt='React'
                    title='React'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://redux.js.org/">
                <motion.img
                    className='links'
                    src={Redu}
                    alt='Redux'
                    title='Redux'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://dart.dev/">
                <motion.img
                    className='links'
                    src={Dart}
                    alt='Dart'
                    title='Dart'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://flutter.dev/">
                <motion.img
                    className='links'
                    src={Flutter}
                    height={'40px'}
                    alt='Flutter'
                    title='Flutter'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://uk.wordpress.org/">
                <motion.img
                    className='links'
                    src={wp}
                    alt='WordPress'
                    title='WordPress'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://www.php.net/">
                <motion.img
                    className='links'
                    src={php}
                    alt='php'
                    title='php'
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        // rotate: 360,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                    }}
                />
            </a>
        </>
    )
}

export { Technologies }