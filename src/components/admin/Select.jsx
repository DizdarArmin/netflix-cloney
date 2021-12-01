export default function Select({ hook }) {
  const [label, state, set] = hook;

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <label>
      {label}
      <select
        defaultChecked="0"
        value={state}
        onChange={(e) => {
          console.log(typeof e.target.value);
          set(e.target.value);
        }}
      >
        <option value="" selected="selected" hidden="hidden">
          Choose here
        </option>
        {numbers.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
