export default function Right({ setDirection }) {
  return (
    <div className="right" onClick={() => setDirection("right")}>
      <i className="fas fa-4x fa-chevron-right" />
    </div>
  );
}
