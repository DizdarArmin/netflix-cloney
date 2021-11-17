import { useNavigate, useParams } from "react-router";
export default function MediaCard({ item, parent }) {
  const navigate = useNavigate();
  const { category } = useParams();
  function onClick() {
    navigate(`/manage-${category}/${item.id}`);
  }
  return (
    <div className="media-card" onClick={onClick}>
      <img src={item.thumbnail} alt={item.name} />
      <h3>{item.name}</h3>
    </div>
  );
}
