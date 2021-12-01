import useQueryCollection from "../../hooks/useQueryCollection";
import { useEffect, useState, useRef, createRef, useMemo } from "react";
import Card from "./Card";
import Left from "./Left";
import Right from "./Right";

export default function Row({ category, search }) {
  const [media, setMedia] = useState([]);
  const reference = useMemo(() => media.map(() => createRef()), [media]);
  const [limit, setLimit] = useState(100);
  const [amount, setAmount] = useState(3);
  const { collection } = useQueryCollection(category, null, limit);

  useEffect(() => {
    Search(search);
  }, [search]);

  useEffect(() => {
    if (reference.length > 1) {
      reference[amount - 1].current.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    }
  }, [amount]);

  useEffect(() => {
    setMedia(collection);
  }, [collection]);

  function Search(value) {
    const filtered = collection.filter((item) =>
      [item.name, item.cast, item.genres].some((e) =>
        e.toLowerCase().includes(value.toLowerCase())
      )
    );
    setMedia(filtered);
  }

  return (
    <>
      {media.length > 0 && (
        <div className="wrapper">
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>

          <div className="holder">
            <Left hook={[amount, setAmount, reference.length]} />
            <div className="row">
              {media.map((item, i) => (
                <Card reference={reference[i]} key={item.name} item={item} />
              ))}
            </div>

            <Right hook={[amount, setAmount, reference.length]} />
          </div>
        </div>
      )}
    </>
  );
}
