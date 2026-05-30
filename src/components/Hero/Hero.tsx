import styles from './Hero.module.sass'

export function Hero(){
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.hero__content}>
                    <h1 className={styles.hero__title}>Доставка еды за 30 минут</h1>
                    <p className={styles.hero__subtitle}>Горячая и вкусная еда прямо к вашему порогу</p>
                    <button className={styles.hero__btn}>Заказать сейчас</button>  
                    <div className={styles.hero__search}>
                        <input type="text" placeholder="Поиск блюд или ресторанов..." />
                        <button>Найти</button>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}