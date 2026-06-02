import styles from "./TopDishes.module.sass";
import { Card } from "../Card/Card";

const products = [
  {
    id: 1,
    title: "Пицца",
    price: 450,
    image: "./hero-bg-food.png",
    category: "pizza",
    isPopular: true,
  },
  {
    id: 2,
    title: "Бургер",
    price: 320,
    image: "./hero-bg-food.png",
    category: "burger",
    isPopular: false,
  },
  {
    id: 3,
    title: "Суши",
    price: 580,
    image: "./hero-bg-food.png",
    category: "sushi",
    isPopular: true,
  },
  {
    id: 4,
    title: "Салат",
    price: 280,
    image: "./hero-bg-food.png",
    category: "salad",
    isPopular: false,
  },
];

export function TopDishes() {
  const popularProducts = products.filter(
    (product) => product.isPopular === true
  );

  return (
    <section className={styles.topDishes}>
      <div className={styles.container}>
        <div className={styles.topDishes__header}>
          <h2>Топ блюд</h2>
          <button className={styles.showAllBtn}>Показать все</button>
        </div>
        <div className={styles.topDishes__grid}>
          {popularProducts.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
