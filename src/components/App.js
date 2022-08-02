import React from 'react';
import Quote from './Quote';
import Author from './Author';
import Layout from './Layout';
import { Container, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Routes>
            <Route path="/" element={<Quote />} />
            <Route path="/:id" element={<Author />} />
            <Route path="*" element={<Typography>Not Found</Typography>} />
          </Routes>
        </Container>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
