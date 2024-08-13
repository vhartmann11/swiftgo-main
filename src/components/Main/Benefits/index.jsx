import { AiOutlineDoubleRight } from "react-icons/ai"
import styles from "./Benefits.module.scss"
import { FaMoneyBillTrendUp, FaClockRotateLeft, FaStamp } from "react-icons/fa6";
import { BsTransparency } from "react-icons/bs";
import { TbShoppingCartDown } from "react-icons/tb";
import { LuHelpingHand } from "react-icons/lu";



const Benefits = () => {
    return (
        <section id="beneficios" className={styles.Benefits}>
            <img src="/teste333.png" alt="" />
            <div className={styles.BenefitsText}>
                <h2>Nossos <br></br> Beneficios</h2>
                <p>Ao juntar-se a equipe SwiftGO, desfrute de pagamentos semanais, ganhos flexíveis e sem análise de crédito, apenas uma caução.</p>
                <a className={styles.BenefitsBtn} href="#contato">Junte-se a nós hoje
                    <span className={styles.BtnAnimationOut}>
                        <AiOutlineDoubleRight /> </span></a>
            </div>
            <div className={styles.BenefitsGrid}>
                <div className={styles.GridText}>
                    <div className={styles.GridTitle}>
                        <h3> <span><FaClockRotateLeft /></span> Horário flexível</h3>
                    </div>
                    <p className={styles.GridDescription}>
                        Encontre um emprego que te dê a liberdade de escolher os horários e os dias em que você vai trabalhar.
                    </p>
                </div>
                <div className={styles.GridText}>
                    <div className={styles.GridTitle}>
                        <h3> <span><BsTransparency /></span> Transparência total</h3>
                    </div>
                    <p className={styles.GridDescription}>
                        Você vai receber um relatório semanal com os seus ganhos e descontos.
                    </p>
                </div>
                <div className={styles.GridText}>
                    <div className={styles.GridTitle}>
                        <h3> <span><LuHelpingHand /></span> Suporte total</h3>
                    </div>
                    <p className={styles.GridDescription}>
                        Terá o suporte da equipe SwiftGO, que vai ajudar com a manutenção, fornecer um veículo de substituição e outras coisas.
                    </p>
                </div>
                <div className={styles.GridText}>
                    <div className={styles.GridTitle}>
                        <h3> <span><TbShoppingCartDown /></span> Desconto por custos</h3>
                    </div>
                    <p className={styles.GridDescription}>
                        Receba descontos nos postos de combustíveis das empresas parceiras de frota.
                    </p>
                </div>
                <div className={styles.GridText}>
                    <div className={styles.GridTitle}>
                        <h3> <span> <FaStamp /> </span>Menos burocracia</h3>
                    </div>
                    <p className={styles.GridDescription}>
                        Cuidamos de toda a documentação do veículo e da plataforma, para que você possa dirigir com tranquilidade.
                    </p>
                </div>
                <div className={styles.GridText}>
                    <div className={styles.GridTitle}>
                        <h3> <span><FaMoneyBillTrendUp /></span> Rendimento adicional </h3>
                    </div>
                    <p className={styles.GridDescription}>
                        Renda semanal. Quanto mais você dirigir, mais você vai ganhar — é simples assim!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Benefits