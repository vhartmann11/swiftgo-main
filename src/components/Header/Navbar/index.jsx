import { useState } from 'react';
import styles from "./Navbar.module.scss";
import { AiOutlineDoubleRight, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <a className={styles.NavLogo} href="#">
                <img src="./SwiftGONavbarLogo1.png" alt="SwiftGO Logo" />
            </a>
            <nav className={styles.NavContainer}>
                <div className={styles.NavLinks}>
                    <div className={styles.LinksGrid}>
                        <a className={styles.Links} href="#about">Sobre nós</a>
                        <a className={styles.Links} href="#vantagens">Vantagens</a>
                        <a className={styles.Links} href="#processos">Processos</a>
                        <a className={styles.Links} href="#beneficios">Benefícios</a>
                        <a className={styles.Links} href="#veiculos">Veículos</a>
                        <span>
                            <i></i>
                            <i></i>
                        </span>
                    </div>
                    <div className={styles.Btn}>
                        <a href="#contato" className={styles.LinksBtn}>
                            Torne-se um motorista
                            <span className={styles.BtnAnimationOut}><AiOutlineDoubleRight /></span>
                        </a>
                    </div>
                </div>
                <div className={styles.HamburgerMenu} onClick={toggleMenu}>
                    <AiOutlineMenu className={styles.HamburgerIcon} />
                </div>
                {isMenuOpen && (
                    <div className={`${styles.MobileMenu} ${isMenuOpen ? styles.show : ''}`}>
                        <a href="#about" onClick={toggleMenu}>Sobre nós</a>
                        <a href="#vantagens" onClick={toggleMenu}>Vantagens</a>
                        <a href="#processos" onClick={toggleMenu}>Processos</a>
                        <a href="#beneficios" onClick={toggleMenu}>Benefícios</a>
                        <a href="#veiculos" onClick={toggleMenu}>Veículos</a>
                        <a href="#contato" className={styles.Links} onClick={toggleMenu}>Torne-se um motorista</a>
                        <div className={styles.MobileSocials}>
                            <a href="#" onClick={(e) => { e.preventDefault() }}>
                                <img src="./Facebook.svg" alt="" />
                            </a>
                            <a href="#" onClick={(e) => { e.preventDefault() }}>
                                <img src="./Linkedin.svg" alt="" />
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
