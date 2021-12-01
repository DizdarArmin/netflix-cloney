export default function Left({ hook }) {
  const [amount, setAmount, length] = hook;

  function onClick() {
    if (amount > 3) {
      setAmount(amount - 3);
    }
  }
  return (
    <div onClick={() => onClick()} className="left">
      <i className="fas fa-4x fa-chevron-left" />
    </div>
  );
}
