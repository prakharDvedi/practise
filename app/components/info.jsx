export default function Info({ data, setData, err }) {
  const { name, age, email } = data;

  const handleChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
      // we did this to make it dynamic, so that we can use the same function for multiple inputs
    }));
  };

  return (
    <>
      <h2>Info Component</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {err.name && <span className="error">{err.name}</span>}
        {/* //always let parent store data, not child */}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
        {/* //always let parent store data, not child */}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        {/* //always let parent store data, not child */}
      </div>
    </>
  );
}
