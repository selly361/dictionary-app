import { useEffect, useState } from "react";

import axios from "axios";

export const useFetchData = (word: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState<null | true>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (data.title == "No Definitions Found")
        throw new Error("No Definitions Found");

      setData(data);

      console.log(typeof data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};
