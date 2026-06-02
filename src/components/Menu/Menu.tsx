import { useState } from "react";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { Categories } from "../Categories/Categories";
//import { Carousel } from '../Carousel/Carousel'
import styles from "./Menu.module.sass";

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section className={styles.menu}>
      <div className={styles.menu__container}>
        <div className={styles.menu__categories}>
          <Categories
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
        <div className={styles.menu__products}>
          <ProductGrid category={selectedCategory} />
        </div>
      </div>
    </section>
  );
}
