import styles from "./Header.module.sass";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__body}>
          <a href="/" className={styles.header__logo}>
            <img src="/logo.jpg" alt="Food delivery logo" />
            <span>Foodly</span>
          </a>
          <nav className={styles.header__menu}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}>
                <a href="/menu">Заказать</a>
              </li>
              <li className={styles.header__item}>
                <a href="/blog">Меню</a>
              </li>
              <li className={styles.header__item}>
                <a href="/contacts">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className={styles.header__form}>
            <button>Регистрация</button>
            <button>Вход</button>
          </div>
        </div>
      </div>
    </header>
  );
}
