import { AiOutlineDoubleRight } from "react-icons/ai"
import styles from "./Vehicles.module.scss"

const Vehicles = () => {
    return (
        <section id="veiculos" className={styles.Vehicles}>
            <div className={styles.VehiclesText}>
                <h2 className={styles.VehiclesTitle}>
                    A Nossa Linha de Veículos
                </h2>
                <p className={styles.VehiclesDescription}>
                Oferecemos uma grande variedade de veículos para aluguel, para que você possa começar a ganhar dinheiro rapidamente e sem precisar usar o seu próprio carro.
                </p>
            </div>
            <div className={styles.GridVehiclesArea}>
                <div className={styles.VehicleGrid}>
                    <div className={styles.GridText}>
                        <h3 className={styles.GridTitle}>
                            SwiftX
                        </h3>
                        <span className={styles.GridDescription}>
                            | R$ 130 / Semana
                        </span>
                    </div>
                    <img src="./uber111.png" alt="" />
                </div>
                <div className={styles.VehicleGrid}>
                    <div className={styles.GridText}>
                        <h3 className={styles.GridTitle}>
                            SwiftXL
                        </h3>
                        <span className={styles.GridDescription}>
                            | R$ 175 / Semana
                        </span>
                    </div>
                    <img src="./uber222.png" alt="" />
                </div>
                <div className={styles.VehicleGrid}>
                    <div className={styles.GridText}>
                        <h3 className={styles.GridTitle}>
                            SwiftPremium
                        </h3>
                        <span className={styles.GridDescription}>
                            | R$ 225 / Semana
                        </span>
                    </div>
                <img src="./uber333.png" alt="" />
                </div>
            </div>

            <a className={styles.VehiclesBtn} href="#contato">
                Comece hoje
                <span className={styles.BtnAnimationOut}> <AiOutlineDoubleRight /></span>
            </a>
        </section>
    )
}

export default Vehicles