import { motion } from "framer-motion"
import '../../App.css'
import { Others } from "./components/Others";
import { Technologies } from "./components/Technologies";

function ResumeU() {

    return (
        < section className='resume z-depth-4' >
            <div className='header' >
                <div className="row" style={{ marginBottom: '0px' }}>
                    <div className="col s12 title" >
                        <div className="title-about">
                            <h1 style={{ margin: '0px auto' }}>Резюме</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='context'>
                <div className="row" >
                    <div className="tech col s12">
                        <div className='ebout-my primary-color'>
                            <div className='bl-title'>
                                <motion.h3
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 1,
                                        duration: 1.8,
                                    }}
                                    style={{ marginBottom: '0px' }}
                                >Що я <span className='secondary-color'>використовую</span>
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
                                animate={{
                                    width: '200px',
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1,
                                }}>
                            </motion.div>
                        </div>
                        <div className="my-card">
                            <motion.h6
                                whileInView={{
                                    x: 0,
                                    opacity: 1
                                }}
                                initial={{
                                    x: 250,
                                    opacity: 0,
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.5,
                                }}
                                className="primary-color">Це технології, які я використовую для створення програм.</motion.h6>
                            <div className="resume-links" >
                                <Technologies />
                            </div>
                        </div>
                        <div className="my-card">
                            <motion.h6
                                whileInView={{
                                    x: 0,
                                    opacity: 1
                                }}
                                initial={{
                                    x: 250,
                                    opacity: 0,
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.5,
                                }}
                                className="primary-color">Інші... і багато іншого!</motion.h6>
                            <div className="resume-links" >
                                <Others />
                            </div>
                        </div>
                    </div>
                    <div className="what-i-can-do col s12">
                        <div className='ebout-my primary-color'>
                            <div className='bl-title'>
                                <motion.h3
                                    whileInView={{
                                        y: 0,
                                        rotateX: 0,
                                        opacity: 1
                                    }}

                                    initial={{
                                        y: -30,
                                        rotateX: 180,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        delay: 1,
                                        duration: 1.8,
                                    }}
                                    style={{ marginBottom: '0px', display: 'inline-block' }}

                                >Що я можу<span className='secondary-color'> зробити</span>
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
                                    width: '194px',
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1,
                                }}>
                            </motion.div>
                            <div className="col s12 m6 i-do" style={{ paddingLeft: '0px' }}  >
                                <div className="my-card what-i-can-do-u">
                                    <h6>
                                        Інтерфейсні програми
                                    </h6>
                                    <p>Створюю програми на стороні клієнта з такими сучасними функціями, як SPA, з дотриманням стилю семантичної верстки та інших передових практик для оптимізації SEO. Використовую сучасні технології, такі як React, Bootstrap і Framer Motion.</p>
                                </div>
                            </div>
                            <div className="col s12 m6 i-do" style={{ paddingRight: '0px' }}>

                                <div className="my-card what-i-can-do-u">
                                    <h6>
                                        Нативні програми
                                    </h6>
                                    <p>
                                        Використовую Dart/Flutter для створення та підтримки мобільних додатків на Android, а також інтерактивних програм, які ви можете запускати на своїх веб-сторінках або робочому столі. Flutter сучасний, кросплатформний і популярний.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="education-experience col s12">
                        <div className="col s12 m6 education" style={{ paddingLeft: '0px' }}>
                            <div className='ebout-my primary-color'>
                                <div className='bl-title'>
                                    <motion.h3
                                        whileInView={{
                                            y: 0,
                                            rotateX: 0,
                                            opacity: 1
                                        }}
                                        initial={{
                                            y: -30,
                                            rotateX: 180,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            delay: 1,
                                            duration: 1.8,
                                        }}
                                        style={{ marginBottom: '0px', display: 'inline-block' }}
                                    >Осв<span className='secondary-color'>іта</span>
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
                                        width: '67px',
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 2,
                                        duration: 1,
                                    }}>
                                </motion.div>
                            </div>
                            <div className="my-card primary-color">
                                <motion.div
                                    className="education-card atom-u"
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
                                        duration: 1.2,
                                    }} >
                                    <h6>
                                        Онлайн університет Atom
                                    </h6>
                                    <p>
                                        Основи дизайну, налаштування аналітики, налаштування SEO, анімація, створення сайтів під технічне завдання, прототипування, адаптація сайту під різні типи пристроїв, оновлення сайтів, робота з кодом
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="education-card  politeh-u"
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
                                        duration: 1.2,
                                    }}>
                                    <h6>
                                        Харківський політехнічний інститут
                                    </h6>
                                    <p>
                                        Інженер-маханік
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="education-card dsns-u"
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
                                        duration: 1.2,
                                    }}
                                >
                                    <h6>
                                        Сумський машинобудівний технікум
                                    </h6>
                                    <p>
                                        Технік-технолог</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col s12 m6 experience" style={{ paddingRight: '0px' }}>
                            <div className='ebout-my primary-color'>
                                <div className='bl-title'>
                                    <motion.h3
                                        whileInView={{
                                            opacity: 1,
                                            rotateY: 0,
                                        }}
                                        initial={{
                                            rotateY: 90,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            delay: 1,
                                            duration: 1.8,
                                        }}
                                        style={{ marginBottom: '0px', display: 'inline-block' }}
                                    >Дос<span className='secondary-color'>від</span>
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
                                        width: '71px',
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 2,
                                        duration: 1,
                                    }}>
                                </motion.div>
                                <div className="my-card">
                                    <motion.div
                                        className="education-card atom-u"
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
                                            duration: 1.2,
                                        }}>
                                        <h6>
                                            Фрілансер
                                        </h6>
                                        <p>
                                            Маючи досвід роботи з HTML, CSS, JavaScript та іншими відповідними інструментами, я захоплений розробкою красивих, адаптивних і зручних веб-сайтів, які залучають аудиторію та досягають успіху
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        className="education-card politeh-u"
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
                                            duration: 1.2,
                                        }}>
                                        <h6>
                                            Цивільний захист населення
                                        </h6>
                                        <p>
                                            Керівник навчально-методичного центру
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        className="education-card dsns-u"
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
                                            duration: 1.2,
                                        }}
                                    >
                                        <h6>
                                            Державна служба України з надзвичайних ситуацій
                                        </h6>
                                        <p>
                                            Комплексна система захисту інформації
                                        </p>
                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export { ResumeU }