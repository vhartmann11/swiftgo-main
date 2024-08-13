import { AiOutlineDoubleRight } from "react-icons/ai";
import styles from "./Process.module.scss";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

const Process = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <section id="processos" className={styles.Process}>
            <div className={styles.ProcessText}>
                <h2>Como funciona?</h2>
                <p> Junte-se a nós com facilidade e flexibilidade, dirigindo no seu horário preferido e com a possibilidade de ganhos atrativos.</p>
            </div>
            <div ref={ref} className={styles.ProcessGrid}>
                <motion.div className={styles.GridItem}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.350 }}>
                    <div className={styles.ImageContainer}>
                        <img src="./contactus.svg" alt="" />
                        <span>01</span>
                    </div>
                    <h3>Entre em contato conosco.</h3>
                </motion.div>
                <motion.div className={styles.GridItem}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.750 }}>
                    <div className={styles.ImageContainer}>
                        <img src="./documentsid.svg" alt="" />
                        <span>02</span>
                    </div>
                    <h3>Envie a documentação <br /> necessária.</h3>
                </motion.div>
                <motion.div className={styles.GridItem}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 1.250 }}>
                    <div className={styles.ImageContainer}>
                        <img src="./connectdrive.svg" alt="" />
                        <span>03</span>
                    </div>
                    <h3>Disponibilizaremos um carro e, em pouco tempo, você já estará dirigindo.</h3>
                </motion.div>
            </div>
            <a className={styles.ProcessBtn} href="#contato">Candidate-se hoje!
                <span className={styles.BtnAnimationOut}><AiOutlineDoubleRight /></span>
            </a>
        </section>
    );
}

export default Process;
