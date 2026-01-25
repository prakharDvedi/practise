export default function Hobbie({ data, setData }) {
  const { hobbie } = data;

  return (
    <div>
      <h2>Hobbie Component</h2>
      <label>
        <input type="checkbox" checked={hobbie.includes("coding")} /> Coding
      </label>
      <br />
      <label>
        <input type="checkbox" checked={hobbie.includes("singing")} /> Singing
      </label>
      <br />
      <label>
        <input type="checkbox" checked={hobbie.includes("cooking")} /> Cooking
      </label>
      <br />
    </div>
  );
}