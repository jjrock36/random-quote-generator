import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useGlobalContext } from '../context';

const Author = () => {
  const {
    authorData: { results },
    loading,
    error,
  } = useGlobalContext();

  console.log(results);

  return loading ? (
    'Loading...'
  ) : error ? (
    'Something went wrong'
  ) : results ? (
    <>
      <Typography variant="h6">{results[0].author}</Typography>
      {results.map((item, index) => {
        const { content } = item;

        return (
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            key={index}
          >
            <Typography variant="h5" sx={{ mb: 5 }}>
              {content && '"' + content + '"'}
            </Typography>
          </Paper>
        );
      })}
    </>
  ) : null;
};

export default Author;
