import { useCallback, useEffect, useState } from "react";
import { getQueryCollection } from "../scripts/fireStore";

export default function useQueryCollection(collectionName, reload, amount) {
  const [collection, setCollection] = useState([]);
  const [collectionLoading, setLoading] = useState(false);

  const fetchData = useCallback(async (path, amount) => {
    try {
      const data = await getQueryCollection(path, amount);
      setCollection(data);
      setLoading(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(collectionName, amount);
  }, [fetchData, collectionName, reload, amount]);

  return { collection, collectionLoading };
}
