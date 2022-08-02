import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'react-router-dom';
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
      <Link to="/">
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
            <Typography variant="h6">Back to Main page</Typography>
          </Box>
          <ArrowRightAltIcon />
        </Container>
      </Link>
    </>
  ) : null;
};

export default Author;
