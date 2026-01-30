export default function AutoComplete() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(console.log);

  return (
    <div>
      <label> </label>
      <input type="text" placeholder="Search..." />
    </div>
  );
}
