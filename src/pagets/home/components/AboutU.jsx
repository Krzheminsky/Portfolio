import { motion } from "framer-motion"

function EboutU() {

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

                >Про <span className='secondary-color'>Мене </span>
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
                    width: '96px',
                    opacity: 1
                }}
                transition={{
                    delay: 2,
                    duration: 1,
                }}>
            </motion.div>
            <p>
                Привіт, мене звуть Віктор Кржемінський, я фрілансер - розробник сайтів. Я захоплююся розробкою красивих, адаптивних і зручних веб - сайтів. Незалежно від того, чи ви – стартап, чи маєте досконалий бізнес, я тут для того, щоб допомогти вам розвинути онлайн - присутність, необхідну вам для подальшого успіху. Отже, якщо ви шукаєте надійного та креативного розробника інтерфейсу, який допоможе втілити ваші ідеї в життя, давайте поспілкуємося! Разом ми можемо створити щось справді цікаве.
            </p>
        </>
    )

}

export { EboutU }