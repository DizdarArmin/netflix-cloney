export default function Right({ hook }) {
  const [amount, setAmount, length] = hook;

  function onClick() {
    if (amount < length - 3) {
      setAmount(amount + 3);
    }
  }
  return (
    <a onClick={() => onClick()} className="right">
      <i className="fas fa-4x fa-chevron-right" />
    </a>
  );
}
