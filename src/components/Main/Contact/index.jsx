import { AiOutlineDoubleRight } from "react-icons/ai";
import styles from "./contact.module.scss";
import { useState } from "react";
import { Toaster, toast } from 'sonner'


const Contact = () => {
    const [experienciaTVDE, setExperienciaTVDE] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [formInfo, setFormFilled] = useState(false);


    const handleExperienceChange = (value) => {
        setExperienciaTVDE((prevValue) => (prevValue === value ? null : value));
        const nameInput = document.getElementById("name").value;
        const emailInput = document.getElementById("email").value;
        const messageInput = document.getElementById("message").value;
        setFormFilled(nameInput && emailInput && messageInput);


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setExperienciaTVDE(null);
        setNome("");
        setEmail("");
        setTelefone("");

        const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'formulário' }), 1500));
        if (!formInfo) {
            toast.promise(promise, {
                loading: 'Verificando disponibilidade..',
                success: (data) => {
                    return `Seu ${data.name} foi enviado com sucesso!`;
                },
                style: {
                    fontSize: '1rem'
                },
                error: 'Error'
            });

        }
    };

    return (
        <section id="contato" className={styles.Contact}>
            <div className={styles.Container}>
                <div className={styles.ContactSide}>
                    <Toaster richColors position="bottom-center" />
                    <h2>Pronto para Candidatar-se?</h2>
                    <p>
                    Entre em contato e torne seu conceito de trabalho flexível uma realidade.</p>
                    <form className={styles.ContactForm} action="" onSubmit={handleSubmit}>
                        <div className={styles.ContactAbout}>
                            <div className={styles.ContactName}>
                                <label htmlFor="">Nome <span>*</span></label>
                                <input
                                    name="name"
                                    required
                                    value={nome}
                                    type="text"
                                    placeholder="João Pedro"
                                    onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div className={styles.ContactEmail}>
                                <label htmlFor="">Email <span>*</span></label>
                                <input
                                    name="email"
                                    required
                                    value={email}
                                    type="text"
                                    placeholder="seuemail@exemplo.com"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.ContactInfos}>
                            <div className={styles.ContactPhone}>
                                <label htmlFor="">Numero de Telefone <span>*</span></label>
                                <input
                                    name="message"
                                    required
                                    value={telefone}
                                    type="text"
                                    placeholder="99 99999999"
                                    onChange={(e) => setTelefone(e.target.value)} />
                            </div>
                            <div className={styles.ContactExperiences}>
                                <fieldset className={styles.ExpBox}>
                                    <legend className={styles.ExpBoxTitle}>Tem alguma experiência? <span>*</span></legend>
                                    <div className={styles.ExpBoxBtn}>
                                        <label className={experienciaTVDE === 'yes' ? styles.Selected : ''} htmlFor="subscribe-yes">
                                            <input
                                                required
                                                type="radio"
                                                name="experience"
                                                value="yes"
                                                id="subscribe-yes"
                                                checked={experienciaTVDE === 'yes'}
                                                onChange={() => handleExperienceChange('yes')}
                                            />
                                            <span>Sim</span>
                                        </label>
                                        <label className={experienciaTVDE === 'no' ? styles.Selected : ''} htmlFor="subscribe-no">
                                            <input
                                                type="radio"
                                                name="experience"
                                                value="no"
                                                id="subscribe-no"
                                                checked={experienciaTVDE === 'no'}
                                                onChange={() => handleExperienceChange('no')}
                                            />
                                            <span>Não</span>
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <button className={styles.ContactBtn} type="submit">
                            <div>
                                <span>Enviar</span>
                            </div>
                            <span className={styles.BtnAnimationOut}><AiOutlineDoubleRight /></span>
                        </button>
                    </form>
                </div>
                <div className={styles.ContactImgSide}>
                    <div className={styles.ImgSide}>
                        <img src="./contact.webp" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
