import Image from "next/image";
import styles from '@/styles/footer.module.scss'



const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <h2 className={styles.title}>MEDICA CLINIC & CO</h2>
            <div className={styles.links}>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
                <a href="" className={styles.link}>Doctors</a>
            </div>
            <div className={styles.payments}>
                <Image />
                <Image />
            </div>
        </div>
    </footer>
  )
}

export default Footer