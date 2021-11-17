export default function Checkbox({ hook }) {
  const [html, state, set] = hook;
  const { type, label } = html;
  return (
    <label className="publish">
      {label}
      <input type={type} defaultChecked={state} onChange={() => set(!state)} />
    </label>
  );
}
