import useQueryCollection from "../../hooks/useQueryCollection";
import { useEffect, useState, useRef } from "react";
import Card from "./Card";
import Left from "./Left";
import Right from "./Right";

export default function Row({ category, search }) {
  const ref = useRef();
  const [media, setMedia] = useState([]);
  const [direction, setDirection] = useState("");
  const { collection } = useQueryCollection(category, null);

  useEffect(() => {
    Search(search);
  }, [search]);

  useEffect(() => {
    setMedia(collection);
  }, [collection]);

  useEffect(() => {
    if (direction === "left") {
      ref.current.scrollLeft -= 1500;
    } else if (direction === "right") {
      ref.current.scrollLeft += 1500;
    }
    setDirection("");
  }, [direction]);

  function Search(value) {
    const filtered = collection.filter((item) =>
      [item.name, item.cast, item.genres].some((e) =>
        e.toLowerCase().includes(value.toLowerCase())
      )
    );
    setMedia(filtered);
  }

  return (
    <div className="wrapper">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="holder">
        <Left setDirection={setDirection} />
        <div className="row" ref={ref}>
          {media.map((item) => (
            <Card key={item.name} item={item} setDirection={setDirection} />
          ))}
        </div>
        <Right setDirection={setDirection} />
      </div>
    </div>
  );
}
