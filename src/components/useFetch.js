import { useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [quote, setQuote] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchQuote() {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(url);
      setQuote(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  fetchQuote(url);

  return { quote, error, loading };
};

export default useFetch;
