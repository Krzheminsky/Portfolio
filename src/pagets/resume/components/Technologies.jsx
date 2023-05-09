import { motion } from "framer-motion"
import { technologies } from "./data-links"

function Technologies() {

    return (
        <>
            {technologies.map(e => (
                <a className="nav-link" key={e.name} target="_blank" rel="noreferrer" href={e.link}>
                    <motion.img
                        className='links'
                        src={e.image}
                        alt={e.name}
                        title={e.name}
                        transition={{
                            duration: .4,
                        }}
                        whileHover={{
                            scale: 1.5,
                            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                        }}
                    /> </a>

            ))}

        </>
    )
}

export { Technologies }