import { motion } from "framer-motion"
import { link } from './data-link.js';

function Links() {

    return (
        <>
            {link.map(el => (
                <a className="nav-link" key={el.name} target="_blank" rel="noreferrer" href={el.url}>
                    <motion.img
                        className='links'
                        src={el.image}
                        alt={el.name}
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
            ))}
        </>
    )
}

export { Links }