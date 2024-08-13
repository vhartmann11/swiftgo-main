import { AiOutlineCheck } from "react-icons/ai"
import styles from "./Proposals.module.scss"

const Proposals = () => {
    return (
        <section id="vantagens" className={styles.Proposals}>
            <div className={styles.LeftText}>
                <h2>
                    Nossas Propostas e Vantagens
                </h2>
            </div>
            <div className={styles.RightGrid}>
                <div className={styles.GridText}>
                    <h3>
                        Manutenção e Suporte
                    </h3>
                    <ul>
                        <li>
                            <p>
                                <AiOutlineCheck style={{ color: 'green' }} /> Manutenção incluída
                            </p>
                        </li>
                        <li>
                            <p>
                                <AiOutlineCheck style={{ color: 'green' }} /> Pneus ilimitados
                            </p>
                        </li>
                        <li>
                            <p>
                                <AiOutlineCheck style={{ color: 'green' }} /> Linha de apoio 24/7
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.GridText}>
                    <h3>
                        Flexibilidade Financeira
                    </h3>
                    <ul>
                        <li>
                            <p>
                                <AiOutlineCheck style={{ color: 'green' }} /> Pagamentos semanais
                            </p>
                        </li>
                        <li>
                            <p>
                                <AiOutlineCheck style={{ color: 'green' }} /> Ganhos flexíveis
                            </p>
                        </li>
                        <li>
                            <p>
                                <AiOutlineCheck style={{ color: 'green' }} /> Sem análise de crédito (apenas caução)
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.GridText}>
                    <h3>
                        Economia e Controle de Custos
                    </h3>
                    <ul>
                        <li>
                            <p>
                                <AiOutlineCheck style={{ color: 'green' }} /> Cartões de combústivel com desconto de frota
                            </p>
                        </li>
                        <li>
                            <p>
                                <AiOutlineCheck style={{ color: 'green' }} /> Gestão 100% online
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.GridText}>
                    <h3>
                        Seguro e Proteção
                    </h3>
                    <ul>
                        <li>
                            <p>
                                <AiOutlineCheck style={{ color: 'green' }} /> Seguro contra todos problemas
                            </p>
                        </li>
                        <li>
                            <p>
                                <AiOutlineCheck style={{ color: 'green' }} /> Veículo de substituição
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Proposals