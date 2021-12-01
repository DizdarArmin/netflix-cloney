import Navbar from "../components/app/Navbar";

import Account from "../components/app/Account";
import Row from "../components/app/Row";
import Hero from "../components/app/Hero";
import { useState } from "react";
import Search from "../components/app/Search";

export default function Browse({ language }) {
  const [search, setSearch] = useState("");

  return (
    <div className="browse">
      <Navbar>
        <Search search={search} setSearch={setSearch} />
        <Account />
      </Navbar>
      {/*       {!search.length > 0 && <Hero />} */}
      <div className="rows">
        <Row category="movies" search={search} />
        <Row category="documentaries" search={search} />
        <Row category="series" search={search} />
      </div>
    </div>
  );
}
