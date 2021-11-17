export default function Input({ hook }) {
  const [html, state, set] = hook;
  const { type, placeholder, label } = html;
  return (
    <label>
      {label}
      <input
        required
        placeholder={placeholder}
        type={type}
        value={state}
        onChange={(e) => set(e.target.value)}
      />
    </label>
  );
}
