import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import uuid from "react-uuid";


export default function Footer() {
  return (
    <footer style={{ backgroundImage: `url(/bg.webp)` }}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Category</Box>
              {["Home", "Contact", "Terms of services", "About us"].map(z => (
                <Box key={uuid()}>
                  <Link href="/" color="inherit">
                    {z}
                  </Link>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              {[
                "Live",
                "FAQ",
                "Premium",
                "Privacy policy"
              ].map(z => (
                <Box key={uuid()}>
                  <Link href="/" color="inherit">
                    {z}
                  </Link>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box>
              {[
                "You must watch",
                "Recent release",
                "Top IMDB"].map(z => (
                  <Box key={uuid()}>
                    <Link href="/" color="inherit">
                      {z}
                    </Link>
                  </Box>
                ))
              }
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            MovieApp    &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}