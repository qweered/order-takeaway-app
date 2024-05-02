import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const json = await response.json();

        // Log the API call
        console.log("Fetching data from:", url, json);

        // Save payload body and response status to local storage
        localStorage.setItem(
          url,
          JSON.stringify({
            status: response.status,
            body: options && options.body ? options.body : null,
          }),
        );

        setData(json);
      } catch (error) {
        console.error("Fetching error:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, loading };
};

export default useFetch;
