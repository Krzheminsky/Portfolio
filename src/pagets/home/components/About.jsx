import { motion } from "framer-motion"

function Ebout() {

    return (

        <>
            <div className='bl-title'>
                <motion.h3
                    initial={{
                        x: 250,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 1,
                        duration: .8,
                    }}
                    style={{ marginBottom: '0px', display: 'inline-block' }}

                >About <span className='secondary-color'>Me </span>
                </motion.h3>
            </div>
            <motion.div
                style={{

                    height: '4px',
                    backgroundColor: '#2eca7f',
                    borderRadius: '2px',
                }}
                initial={{
                    width: '0px',
                    opacity: 0,
                }}
                whileInView={{
                    width: '92px',
                    opacity: 1
                }}
                transition={{
                    delay: 2,
                    duration: 1,
                }}>
            </motion.div>
            <p>
                Hello, my name is Victor Krzheminsky, and I'm a freelance frontend developer. With my experience in HTML, CSS, JavaScript, and other relevant tools, I'm passionate about designing beautiful, responsive, and user-friendly websites that engage audiences and drive business success. Whether you're a startup or a well-established business, I'm here to help you develop the online presence you need to succeed. So if you're looking for a reliable and creative frontend developer to help bring your ideas to life, let's chat! Together, we can build something truly great.
            </p>
        </>
    )

}

export { Ebout }