import Cart from "../../pages/Cart/Cart";
import Deals from "../../pages/Deals/Deals";
import Home from "../../pages/Home/Home";

const routes = [
  {
    name: "Home",
    url: "/",
    component: Home,
  },
  {
    name: "Deals",
    url: "/deals",
    component: Deals,
  },
  {
    name: "Cart",
    url: "/cart",
    component: Cart,
  },
];

export default routes;
