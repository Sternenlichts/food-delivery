import styles from './Card.module.sass'

interface CardProps {
    title: string
    price: number
    image: string
  }

export function Card({title, price, image} : CardProps) {
    return (
        <div className={styles.card}>
            <img 
                src={image}
                alt={title}
                className={styles.card__image} 
            />
            <div className={styles.card__body}>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__price}>{price} ₽</p>
                
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