import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/fireStore";

export default function useCollection(collectionName, reload) {
  const [collection, setCollection] = useState([]);
  const [collectionLoading, setLoading] = useState(false);

  const fetchData = useCallback(async (path) => {
    try {
      const data = await getCollection(path);
      setCollection(data);
      setLoading(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(collectionName);
  }, [fetchData, collectionName, reload]);

  return { collection, collectionLoading };
}
