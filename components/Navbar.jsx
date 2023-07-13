import Image from "next/image";
import styles from '@/styles/navbar.module.scss'


const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Image src='/medica-clinic-logo.png' alt="Logo" width={134} height={60} />
                <div className={styles.content}>
                    <div className={styles.languages}>
                        <span className={styles.language}>UA</span>
                        <span className={`${styles.language} ${styles.selected}`}>EN</span>
                    </div>
                    <span className={styles.button}><Image src='/menu-icon.svg' alt="Burger menu button" width={48} height={30} /></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar