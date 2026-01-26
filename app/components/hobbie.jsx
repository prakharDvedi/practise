export default function Hobbie({ data, setData, err }) {
  const hobbie = data?.hobbie || [];

  const handleChange = (e) => {
    setData((prev) => {
      const isSelected = prev.hobbie.includes(e);

      return {
        ...prev,
        hobbie: isSelected
          ? prev.hobbie.filter((h) => h !== e)
          : [...prev.hobbie, e],
      };
    });
  };

  return (
    <div>
      <h2>Hobbie Component</h2>

      <label>
        <input
          type="checkbox"
          checked={hobbie.includes("coding")}
          onChange={() => handleChange("coding")}
        />
        Coding
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          checked={hobbie.includes("singing")}
          onChange={() => handleChange("singing")}
        />
        Singing
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          checked={hobbie.includes("cooking")}
          onChange={() => handleChange("cooking")}
        />
        Cooking
      </label>
      <br />
    </div>
  );
}
