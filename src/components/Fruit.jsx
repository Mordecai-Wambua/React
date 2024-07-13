export default function fruit({ name, price, soldout }) {
  return (
    <>
      <li>
        {name} {price} {soldout ? "Sold out" : ""}
      </li>
    </>
  );
}
