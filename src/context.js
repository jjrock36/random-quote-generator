import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  // const [copied, setCopied] = useState(false);
  const [quote, setQuote] = useState({});
  const [authorData, setAuthorData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Get Quote
  useEffect(() => {
    fetchQuote();
  }, []);
  async function fetchQuote() {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
  // Get Author
  let authorName = quote.author;
  if (quote.author) {
    authorName = authorName.toLowerCase().split(' ').join('-');
  }

  async function fetchAuthor() {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(
        'https://api.quotable.io/quotes?author=' + authorName
      );
      setAuthorData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  console.log(authorData);

  return (
    <GlobalContext.Provider
      value={{
        quote,
        authorData,
        loading,
        error,
        fetchQuote,
        fetchAuthor,
        authorName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
