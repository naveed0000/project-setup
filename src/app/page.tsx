import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Grid justifyContent="center" alignItems="center">
      <Grid
        container
        size={{ xs: 12, sm: 6, md: 4 }}
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignContent: 'center',
          gap: 2,
          textAlign: 'center',
        }}
      >
        {/* <h1>Hello, World!</h1>
        <p>This is a simple example of a Next.js app with MUI.</p> */}
        <Grid size={{ md: 1 }}>1</Grid>
        <Grid size={{ md: 1 }}>2</Grid>
        <Grid size={{ md: 1 }}>3</Grid>
        <Grid size={{ md: 1 }}>4</Grid>
        <Grid size={{ md: 1 }}>5</Grid>
        <Grid size={{ md: 1 }}>6</Grid>
        <Grid size={{ md: 1 }}>7</Grid>
        <Grid size={{ md: 1 }}>8</Grid>
        <Grid size={{ md: 1 }}>9</Grid>
        <Grid size={{ md: 1 }}>10</Grid>
      </Grid>
      <Grid sx={{ xs: 12, sm: 6, md: 4 }}>
        <h2>Welcome to the MUI world!</h2>
        <p>Explore the components and styles.</p>
      </Grid>
      <Grid sx={{ xs: 12, sm: 6, md: 4 }}>
        <h3>Get started with MUI</h3>
        <p>Check out the documentation for more information.</p>
      </Grid>
    </Grid>
  );
}
