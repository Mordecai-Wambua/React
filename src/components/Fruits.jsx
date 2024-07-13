import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, soldout: true },
    { name: "Mango", price: 7, soldout: false },
    { name: "Banana", price: 2, soldout: true },
    { name: "Orange", price: 5, soldout: false },
    { name: "Pineapple", price: 8, soldout: true },
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <Fruit
          key={fruit.name}
          name={fruit.name}
          price={fruit.price}
          soldout={fruit.soldout}
        />
      ))}
    </ul>
  );
  //Incase you want it to be rendered here
  /*return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.name}>
          {fruit.name} {fruit.price}
        </li>
      ))}
    </ul>
  );
  */
}
