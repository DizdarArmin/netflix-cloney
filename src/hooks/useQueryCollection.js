import { useCallback, useEffect, useState } from "react";
import { getQueryCollection } from "../scripts/fireStore";

export default function useQueryCollection(collectionName, reload) {
  const [collection, setCollection] = useState([]);
  const [collectionLoading, setLoading] = useState(false);

  const fetchData = useCallback(async (path) => {
    try {
      const data = await getQueryCollection(path);
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
