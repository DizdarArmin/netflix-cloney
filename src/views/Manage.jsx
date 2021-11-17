import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import CategoryPicker from "../components/admin/CategoryPicker";
import MediaCard from "../components/admin/MediaCard";
import Account from "../components/app/Account";
import Navbar from "../components/home/Navbar";
import useCollection from "../hooks/useCollection";
import { draftCreator } from "../scripts/crud";
import html from "../data/AddForm.json";

export default function Manage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("movies");
  const [media, setMedia] = useState([]);
  const { collection } = useCollection(category, null);
  const image =
    "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=";

  useEffect(() => {
    setMedia(collection);
  }, [collection]);

  async function createWithDefaultValues() {
    const document = await draftCreator(html, image, category);
    navigate(`/manage-${category}/${document}`);
  }

  return (
    <div className="manage">
      <Navbar>
        <Account />
      </Navbar>
      <div className="manage-container">
        <div className="controls">
          <CategoryPicker />
          <button onClick={() => createWithDefaultValues()}>Add</button>
        </div>
        <div className="media-cards">
          {media.map((item) => (
            <MediaCard item={item} parent={selected} />
          ))}
        </div>
      </div>
    </div>
  );
}
