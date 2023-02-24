import React from 'react'
import Search from './Search'
import { useNavigate } from "react-router-dom";
import { createTheme } from '@material-ui/core/styles';
import {
  AppBar,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import ScrollToChangeColor from "./ScrollToChangeColor"
import Container from "@mui/material/Container"
import Menu from './Menu';


function Header() {
  const navigate = useNavigate();
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToChangeColor>
        <AppBar position="sticky">
          <Container>
            <div style={header}>
              <div style={menusPosition}>
                <Menu />
              </div>
              <div style={logoPosition}>
                <img src="/movieLogo.webp" onClick={() => navigate("/")} />
              </div>
              <div style={searchPosition}>
                <Search />
              </div>
            </div>
          </Container>
        </AppBar>
      </ScrollToChangeColor>
    </ThemeProvider>
  );
}

export default Header

const header = {
  alignItems: "center",

  display: "grid",
  gridTemplateColumns: "400px 1fr 1fr"
};
const menusPosition = {
  gridColumn: "1/2"
};
const logoPosition = {
  gridColumn: "2/3"
};
const searchPosition = {
  gridColumn: "3/4"
};
