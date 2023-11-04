import hamburgerImg from '../assets/the-ultimate-hamburger.webp';
import cheeseBurgerImg from '../assets/Header_Cheeseburger_832x472_1-3-product-tile-desktop.jpeg';
import friesImg from '../assets/French fries 2.webp';
import coffeeImg from '../assets/Coffee.jpg';
import teaImg from '../assets/BC_2B-_2BAssam_2B_28cup_29_2B_281055_29.webp';
import colaImg from '../assets/cola.avif';

export const ITEMS: Items[] = [
  {
    id: 1,
    count: 1,
    name: "Hamburger",
    price: 80,
    image: hamburgerImg,
  },
  {
    id: 2,
    count: 1,
    name: "Cheeseburger",
    price: 90,
    image: cheeseBurgerImg
  },
  {
    id: 3,
    count: 1,
    name: "Fries",
    price: 45,
    image: friesImg
  },
  {
    id: 4,
    count: 1,
    name: "Coffee",
    price: 70,
    image: coffeeImg
  },
  {
    id: 5,
    count: 1,
    name: "Tea",
    price: 50,
    image: teaImg
  },
  {
    id: 6,
    count: 1,
    name: "Cola",
    price: 40,
    image: colaImg
  }
];