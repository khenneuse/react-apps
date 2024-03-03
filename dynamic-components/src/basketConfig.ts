import Apple from "./components/Apple";
import Banana from "./components/Banana";
import Guava from "./components/Guava";
import Orange from "./components/Orange";

export const basketConfig: Record<
  string,
  {
    name: string;
    components: { key: string; component: () => JSX.Element }[];
  }
> = {
  basket1: {
    name: "Basket 1",
    components: [
      { key: "apple", component: Apple },
      { key: "orange", component: Orange },
    ],
  },
  basket2: {
    name: "Basket 2",
    components: [
      { key: "banana", component: Banana },
      { key: "apple", component: Apple },
    ],
  },
  basket3: {
    name: "Basket 3",
    components: [
      { key: "guava", component: Guava },
      { key: "orange", component: Orange },
    ],
  },
};
