import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) setResponse(json);
      } catch (e) {
        if (!signal.aborted) setError(e);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return { response, error, loading };
};

export default useFetch;
