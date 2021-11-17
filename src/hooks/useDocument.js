import { useCallback, useEffect, useState } from "react";
import { getDocument } from "../scripts/fireStore";
export default function useDocument(collection, documentId, reload) {
  const [document, setDocument] = useState(Object);
  const [documentLoading, setLoading] = useState(false);

  const fetchData = useCallback(async (path, doc) => {
    if (!doc) return null;
    try {
      setLoading(true);
      const data = await getDocument(path, doc);
      setDocument(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(collection, documentId);
  }, [collection, documentId, reload]);

  return { document, documentLoading };
}
