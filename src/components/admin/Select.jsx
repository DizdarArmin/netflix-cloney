export default function Select({ hook }) {
  const [label, state, set] = hook;

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <label>
      {label}
      <select value={state} onChange={(e) => set(e.target.value)}>
        {numbers.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </label>
  );
}
