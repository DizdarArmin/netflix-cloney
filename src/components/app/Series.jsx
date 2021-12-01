import { useState, useEffect } from "react";
import useQueryCollection from "../../hooks/useQueryCollection";
import useCollection from "../../hooks/useCollection";
import Select from "../admin/Select";
import SeriesCard from "./SeriesCard";
export default function Series({ id, name }) {
  const [series, setSeries] = useState([]);
  const [selectSeason, setSelectSeason] = useState(1);
  const [media, setMedia] = useState([]);

  const { collection } = useCollection(`/series/${id}/seasons`, null);
  const { collection: episodes } = useQueryCollection(
    `/series/${id}/seasons/${selectSeason}/episodes`,
    selectSeason,
    100
  );
  useEffect(() => {
    setMedia(episodes);
  }, [episodes]);

  useEffect(() => {
    setSeries(collection);
  }, [collection]);

  return (
    <div>
      <div className="series-top">
        <h2>Episodes</h2>
        <select onChange={(e) => setSelectSeason(e.target.value)}>
          {series &&
            series.map((_, i) => <option value={i + 1}>Season {i + 1}</option>)}
        </select>
      </div>

      {media &&
        media.map((item, i) => (
          <SeriesCard
            id={id}
            season={selectSeason}
            item={item}
            i={i + 1}
            name={name}
          />
        ))}
    </div>
  );
}
