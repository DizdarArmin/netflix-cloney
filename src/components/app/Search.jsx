import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
export default function Search({ search, setSearch }) {
  const [isSearching, setSearching] = useState(false);
  const [expandSearch, setExpand] = useState("");

  useEffect(() => {
    if (isSearching) {
      setExpand("expand-search");
    } else {
      setExpand("reduce-search");
      setSearch("");
    }
  }, [isSearching]);

  return (
    <div className="search" onBlur={() => setSearching(false)}>
      {isSearching && (
        <div className={`search-bar ${expandSearch}`}>
          <i onClick={() => setSearching(false)} className="fas fa-search" />

          <input
            autoFocus
            placeholder="Titles, people, genres"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length > 0 && (
            <i onClick={(e) => setSearch("")} className="fas fa-times" />
          )}
        </div>
      )}
      {!isSearching && (
        <i onClick={() => setSearching(true)} className="fas fa-search" />
      )}
    </div>
  );
}
