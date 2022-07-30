import React from 'react';
import useFetch from './useFetch';
import { Box, Container, Paper, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Layout from './Layout';

const App = () => {
  const { response, error, loading } = useFetch(
    'https://quote-garden.herokuapp.com/api/v3/quotes/random'
  );

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
            {response && '"' + response.data[0].quoteText + '"'}
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
              <Typography variant="h6">
                {response && response.data[0].quoteAuthor}
              </Typography>
              <Typography variant="subtitle2">
                {response && response.data[0].quoteGenre}
              </Typography>
            </Box>
            <ArrowRightAltIcon />
          </Container>
        </Paper>
      </Container>
    </Layout>
  );
};

export default App;
