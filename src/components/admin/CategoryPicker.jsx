import { useNavigate, useParams } from "react-router";
import { useState } from "react";
export default function CategoryPicker() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(category);
  function onChange(e) {
    setSelected(e.target.value);
    navigate(`/manage-${e.target.value}`);
  }
  return (
    <select
      className="category-pick"
      value={selected}
      onChange={(e) => onChange(e)}
    >
      <option value="movies">Movies</option>
      <option value="series">Series</option>
      <option value="documentaries">Documentaries</option>
    </select>
  );
}
