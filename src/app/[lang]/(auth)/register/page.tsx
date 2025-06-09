import React from 'react';
import Index from './_components/Index';
import { Box, Container } from '@mui/material';

export default function Page() {
  return (
    <Box>
      <Container
      // sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Index />;
      </Container>
    </Box>
  );
}
