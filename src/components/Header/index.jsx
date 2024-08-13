import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss";
import Navbar from "./Navbar";

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const scrollThreshold = 100; // Ajuste esse valor para a quantidade desejada de pixels antes do header desaparecer

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            if (isScrollingDown && currentScrollPos > scrollThreshold) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible, scrollThreshold]);

    const headerClasses = `${styles.header} ${visible ? styles.visible : styles.hidden}`;

    return (
        <header className={headerClasses}>
            <Navbar />
        </header>
    );
};

export default Header;
