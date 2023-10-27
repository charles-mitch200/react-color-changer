import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarktext,
  setIsDarktext,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Add Color Name:</label>
      <input
        type="text"
        autoFocus
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarktext(!isDarktext)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
