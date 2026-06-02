import styles from "./RestaurantCard .module.sass";

interface CardProps {
  title: string;
  rating: number;
  image: string;
}

export function RestaurantCard({ title, rating, image }: CardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.card__image} />
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__rating}>⭐ {rating}</p>
        <div className={styles.card__actions}>
          <button className={styles.card__showBtn}>Показать</button>
        </div>
      </div>
    </div>
  );
}
