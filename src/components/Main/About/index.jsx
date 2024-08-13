import { useEffect, useRef } from 'react'
import styles from './About.module.scss'
import { motion, useAnimation, useInView } from 'framer-motion'

const About = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation();
    useEffect(() =>{
        if (isInView) {
            mainControls.start("visible")

        }
    })

    return (
        <section id='about' ref={ref} className={styles.About}>
            <motion.div className={styles.Container}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.450 }}>

                <h2 className={styles.AboutText}>
                    &nbsp;&nbsp;Estamos comprometidos em garantir o sucesso dos motoristas com <br /> flexibilidade, eficiência e confiança.
                </h2>
            </motion.div>
        </section>
    )
}

export default About