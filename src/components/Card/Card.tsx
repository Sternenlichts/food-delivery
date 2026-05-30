import styles from './Card.module.sass'

export function Card() {
    return (
        <div className={styles.card}>
            <img 
                src="./hero-bg-food.png" 
                alt="food" 
                className={styles.card__image} 
            />
            <div className={styles.card__body}>
                <h3 className={styles.card__title}>Название блюда</h3>
                <p className={styles.card__description}>Описание блюда</p>
                
                <div className={styles.card__actions}>
                    <div className={styles.card__quantity}>    
                        <button className={styles.card__quantityBtn}>−</button>
                        <span className={styles.card__quantityValue}>1</span>
                        <button className={styles.card__quantityBtn}>+</button>
                    </div>
                    <button className={styles.card__buyBtn}>Купить</button>
                </div>
            </div>
        </div>
    )
}