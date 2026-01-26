export default function Settings({ data, setData }) {
  const { theme } = data;
  const handleThemeChange = (e) => {
    setData((prevTheme) => ({
      ...prevTheme,
      theme: e.target.value,
    }));
  };
  return (
    <>
      <h2>Settings Component</h2>
      <div>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={handleThemeChange}
          />
          Light Theme
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />
          Dark Theme
        </label>
      </div>
    </>
  );
}
