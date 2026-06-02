import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Menu } from "./components/Menu/Menu";
import { TopRestaurants } from "./components/TopRestaurants/TopRestaurants";
import { TopDishes } from "./components/TopDishes/TopDishes";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <TopRestaurants />
      <TopDishes />
      <Menu />
    </>
  );
}
