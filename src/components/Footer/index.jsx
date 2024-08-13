import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <img src="./SwitfGOFooterLogo.png" alt="" />

                <div className={styles.FooterNav}>
                    <div className={styles.NavContact}>
                        <h3>Contato</h3>
                        <ul>
                            <li>
                                <a className={styles.Links}>ola@swiftgo.com</a>
                            </li>
                            <li>
                                <a className={styles.Links}>+99 999999999</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.NavAbout}>
                        <h3>Navegação</h3>
                        <nav>
                            <a className={styles.Links} href="#about">Sobre nós</a>
                            <a className={styles.Links} href="#vantagens">Vantagens</a>
                            <a className={styles.Links} href="#processos">Processo</a>
                            <a className={styles.Links} href="#beneficios">Benefícios</a>
                            <a className={styles.Links} href="#veiculos">Veículos</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={styles.FooterBottom}>
                <div className={styles.FooterRights}>
                    <p>
                        © 2024 SwiftGO. Todos direitos reservados.
                    </p>
                </div>
                <div className={styles.FooterIcons}>
                    <a href="#" onClick={(e) => {
                        e.preventDefault()
                    }}>
                        <img src="./Facebook.svg" alt="" />
                    </a>

                    <a href="#" onClick={(e) => {
                        e.preventDefault()
                    }}>
                        <img src="./Linkedin.svg" alt="" />
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer