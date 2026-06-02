import styles from "./TopRestaurants.module.sass";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";

const restaurants = [
  { id: 1, name: "KFC", image: "/kfc.jpg", rating: 4.5 },
  { id: 2, name: "Burger King", image: "/bk.jpg", rating: 4.3 },
  { id: 3, name: "McDonald's", image: "/mcd.jpg", rating: 4.4 },
  { id: 4, name: "Pizza Hut", image: "/pizza-hut.jpg", rating: 4.6 },
];

export function TopRestaurants() {
  return (
    <section className={styles.topRestaurants}>
      <div className={styles.container}>
        <div className={styles.topRestaurants__header}>
          <h2>Топ ресторанов</h2>
          <button className={styles.showAllBtn}>Показать все</button>
        </div>
        <div className={styles.topRestaurants__grid}>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              title={restaurant.name}
              rating={restaurant.rating}
              image={restaurant.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
