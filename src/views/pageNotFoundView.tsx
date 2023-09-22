import React from 'react';
import { Grid, Typography } from '@mui/material';

const PageNotFound: React.FC = () => {
  return (
    <>
      <Grid
        container
        sx={{
            mt: 3,
            height: '50vh',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mt: 3 }}>Page not found.</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default PageNotFound;
