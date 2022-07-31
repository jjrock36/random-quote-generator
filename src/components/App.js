import React, { useState } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Layout from './Layout';
import axios from 'axios';
import { useEffect } from 'react';
// import useFetch from './useFetch';

const url = 'https://api.quotable.io/random';

const App = () => {
  // const [copied, setCopied] = useState(false);
  const [quote, setQuote] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuote(url);
  }, []);
  async function fetchQuote(url) {
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

  const { content, author, tags } = quote;

  return (
    <Layout>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h5" sx={{ mb: 5 }}>
            {loading && 'Loading...'}
            {error && 'Something went wrong.'}
            {content && '"' + content + '"'}
          </Typography>
          <Container
            variant="text"
            color="inherit"
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)',
                borderRadius: 1,
                cursor: 'pointer',
                transition: '.25s',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
              }}
            >
              <Typography variant="h6">{author && author}</Typography>
              <Typography variant="subtitle2">{tags && tags[0]}</Typography>
            </Box>
            <ArrowRightAltIcon />
          </Container>
        </Paper>
      </Container>
    </Layout>
  );
};

export default App;
