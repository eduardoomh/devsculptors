import Title from '../Title/Title'
import styles from './Maintenance.module.css'

const Maintenance = () => {
    return (
        <article className={styles.content}>
            <Title>DEVSCULPTORS</Title>
            <br />
            <p className={styles.paragraph}>Desarrollamos soluciones de software meticulosamente <br />hechas para ti.</p>
            <br />
            <section className={styles.img_container}>
                <img src='/images/dev.png' width={450} height={450} alt="dev-in-computer" />
            </section>
            <br />
            <p className={styles.second_paragraph}>
                Actualmente nos encontramos en mantenimiento, <br /> vuelve pronto.
            </p>
        </article>
    )
}

export default Maintenance