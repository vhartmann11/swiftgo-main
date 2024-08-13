import styles from "./Main.module.scss"
import Hero from "./Hero"
import About from "./About"
import Proposals from "./Proposals"
import Process from "./Process"
import Benefits from "./Benefits"
import Vehicles from "./Vehicles"
import Contact from "./Contact"

const Main = () => {
    return(
        <main className={styles}>
            <Hero />
            <About />
            <Proposals />
            <Process />
            <Benefits />
            <Vehicles />
            <Contact />
        </main>
    )
}

export default Main