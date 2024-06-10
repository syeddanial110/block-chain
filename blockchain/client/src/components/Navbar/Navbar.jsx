import { Box, Button, Grid } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Grid container p={2} justifyContent="center">
      <Grid item xs={2}>
        <h1 className="text-2xl">Logo Here</h1>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="center">
        <Box display="flex" gap={3}>
          <p>Markets</p>
          <p>Exchange</p>
          <p>Tutorial</p>
          <p>Wallets</p>
        </Box>
      </Grid>
      <Grid item xs={2} display="flex" justifyContent="flex-end">
        <Button variant="contained">Login</Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
