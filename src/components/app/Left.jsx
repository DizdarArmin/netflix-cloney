export default function Left({ setDirection }) {
  return (
    <div className="left" onClick={() => setDirection("left")}>
      <i className="fas fa-4x fa-chevron-left" />
    </div>
  );
}
