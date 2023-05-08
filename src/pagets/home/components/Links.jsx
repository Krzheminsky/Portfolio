import { motion } from "framer-motion"
import linkedin from '../../../images/linkedin.png';
import dou from '../../../images/dou1.png';
import github from '../../../images/github1.png';

function Links() {

    return (
        <>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/victor-krzheminsky-75299a141/">
                <motion.img
                    className='links'
                    src={linkedin}
                    alt='linkedin'
                    initial={{
                        borderRadius: '20px'
                    }}
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                        borderRadius: '30px',
                    }}
                /> </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://dou.ua/users/viktor-krzheminskii/">
                <motion.img
                    className='links'
                    src={dou}
                    width={'40px'}
                    alt='dou ua'
                    initial={{
                        borderRadius: '20px'
                    }}
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                        borderRadius: '30px',
                    }}
                />
            </a>
            <a className="nav-link " target="_blank" rel="noreferrer" href="https://github.com/Krzheminsky">
                <motion.img
                    className='links'
                    src={github}
                    width={'40px'}
                    alt='github'
                    initial={{
                        borderRadius: '20px'
                    }}
                    transition={{
                        duration: .4,
                    }}
                    whileHover={{
                        scale: 1.5,
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                        borderRadius: '30px',
                    }}
                />
            </a>
        </>
    )

}

export { Links }