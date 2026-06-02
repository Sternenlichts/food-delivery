import styles from "./ProductGrid.module.sass";
import { Card } from "../Card/Card";

const products = [
  {
    id: 1,
    title: "Пицца",
    price: 450,
    image: "./hero-bg-food.png",
    category: "pizza",
  },
  {
    id: 2,
    title: "Бургер",
    price: 320,
    image: "./hero-bg-food.png",
    category: "burger",
  },
  {
    id: 3,
    title: "Суши",
    price: 580,
    image: "./hero-bg-food.png",
    category: "sushi",
  },
  {
    id: 4,
    title: "Салат",
    price: 280,
    image: "./hero-bg-food.png",
    category: "salad",
  },
];

interface ProductGridProps {
  category: string;
}

export function ProductGrid({ category }: ProductGridProps) {
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className={styles.product__grid}>
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
