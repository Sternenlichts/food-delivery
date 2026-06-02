import styles from "./Categories.module.sass";

const categories = [
  { id: "all", name: "Все" },
  { id: "pizza", name: "Пицца" },
  { id: "some", name: "Some" },
];

interface ICategories {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function Categories({ selectedCategory, onSelect }: ICategories) {
  return (
    <div className={styles.categories}>
      <div className={styles.categories__container}>
        <div className={styles.categories__list}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categories__btn} ${
                selectedCategory === category.id ? styles.active : ""
              }`}
              onClick={() => onSelect(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
