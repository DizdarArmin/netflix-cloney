export default function ButtonBack({ navigate }) {
  return (
    <button
      type="reset"
      onClick={() => navigate(-1)}
      className="outline-button next"
    >
      Go back
    </button>
  );
}
