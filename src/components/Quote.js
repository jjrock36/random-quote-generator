import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Quote = () => {
  const {
    quote: { content, author, tags },
    loading,
    error,
    fetchAuthor,
    authorName,
  } = useGlobalContext();

  return (
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography variant="h5" sx={{ mb: 5 }}>
        {loading && 'Loading...'}
        {error && 'Something went wrong.'}
        {content && '"' + content + '"'}
      </Typography>
      <Link to={`/${authorName}`}>
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
          onClick={fetchAuthor}
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
      </Link>
    </Paper>
  );
};

export default Quote;
