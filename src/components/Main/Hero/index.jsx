import React, { useEffect, useState } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import styles from './Hero.module.scss';
import { motion } from 'framer-motion';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bannerTransform = `translateY(${30 + scrollY / 29}%) translateZ(0px)`;

    return (
        <section id='hero' className={styles.Hero}>
            <div className={styles.HeroContainer}>
                <motion.div className={styles.HeroText}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <h1 className={styles.HeroTitle}>
                        &nbsp;&nbsp; Dirija com segurança, <br /> fature com liberdade!
                    </h1>
                    <motion.div className={styles.HeroDescription}
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.45 }}>
                        <p className={styles.HeroDescriptionText}>
                            A solução ideal para motoristas que buscam uma experiência simplificada e integrada de locação de veículos.
                        </p>
                        <motion.div className={styles.HeroBtn} variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 0.75 }}>
                            <a className={styles.Btn} href="#contato">Inicie a sua jornada
                                <span className={styles.BtnAnimationOut}><AiOutlineDoubleRight /></span>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            <div className={styles.HeroBanner}>
                <div className={styles.BannerImg} style={{ transform: bannerTransform }}>
                    <img src="./hero.webp" alt="Motorista de aplicativo olhando para frente com o GPS" />
                </div>
            </div>
        </section>
    )
}

export default Hero;
