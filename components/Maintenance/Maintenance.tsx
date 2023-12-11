import Title from '../Title/Title'
import styles from './Maintenance.module.css'

const Maintenance = () => {
    return (
        <article className={styles.content}>
            <Title>DEVSCULPTORS</Title>
            <br />
            <p className={styles.paragraph}>Desarrollamos soluciones de software meticulosamente <br />hechas para ti.</p>
            <br />
            <p className={styles.emoji_container}>
                <img src='/images/emoji1.png' width={36} height={36} alt='emoji_01' />
                <img src='/images/emoji2.png' width={36} height={36} alt='emoji_02' />
            </p>
            <br/>
            <section className={styles.img_container}>
                <img src='/images/dev.png' width={450} height={450} alt="dev-in-computer" />
            </section>
            <br />
            <p className={styles.second_paragraph}>
                Actualmente nos encontramos en  <br />mantenimiento, vuelve pronto.
            </p>
        </article>
    )
}

export default Maintenance