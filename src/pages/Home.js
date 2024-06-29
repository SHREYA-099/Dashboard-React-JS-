import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Home
      </Typography>
      <Typography variant="body1">
        Welcome to the admin dashboard.
      </Typography>
    </Container>
  );
};

export default Home;