import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container>
      <Box>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright '}
          &copy;{' '}
          <Link color="primary" href="https://joeyjenson.com">
            Joey Jenson
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
