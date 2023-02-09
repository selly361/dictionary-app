import { useEffect, useState } from "react";

import { IWord } from "types";
import axios from "axios";

export const useFetchData = (word: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IWord | null>(null);
  const [error, setError] = useState<null | true>(null);


  useEffect(() => {
    fetchData(word)
  }, [])


  const fetchData = async (text: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const { data } = await axios(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
      );

      if (data.title == "No Definitions Found")
        throw new Error("No Definitions Found");

      setData(data[0]);

    } catch (err) {
      setError(true);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};
