export default function TextArea({ hook }) {
  const [html, state, set] = hook;
  const { type, placeholder, label } = html;
  return (
    <label>
      {label}
      <textarea
        placeholder={placeholder}
        required
        type={type}
        value={state}
        onChange={(e) => set(e.target.value)}
      />
    </label>
  );
}
