import { useState, useEffect } from "react";
export default function Series({ media }) {
  const [series, setSeries] = useState();

  useEffect(() => {
    setSeries(media);
  }, [media]);

  return <div></div>;
}
