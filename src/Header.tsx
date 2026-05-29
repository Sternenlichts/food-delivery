import styles from './Header.module.sass'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__body}>
                    <a href="/" className={styles.header__logo}>
                        <img src="/logo.jpg" alt="Food delivery logo"/>
                        <span>Eatly</span>
                    </a>
                    <nav className={styles.header__menu}>
                        <ul className={styles.header__list}>
                            <li className={styles.header__item}><a href="/menu">Menu</a></li>
                            <li className={styles.header__item}><a href="/blog">Blog</a></li>
                            <li className={styles.header__item}><a href="/prices">Prices</a></li>
                            <li className={styles.header__item}><a href="/contacts">Contacts</a></li>
                        </ul>
                    </nav>
                    <div className={styles.header__form}>
                        <button>Registration</button>
                        <button>Autorisation</button>
                    </div>
                </div>
            </div>
        </header>
    )
}