import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/material";
import Keyword from "./components/Keyword";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ClosestMRT from "./components/ClosestMRT";
import CuisineCards from "./components/CuisineCards";
import Cuisines from "./components/Cuisines";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#780116",
      },
      secondary: {
        main: "#3d5a80",
      },
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <h1>Welcome to SG Food Finder</h1>
            <h3>
              Search up restaurants and other food establishments by one of the
              following:
            </h3>
            <Stack direction="row" spacing={4} justifyContent="center" sx={{mt: 4}}>
              <Button variant="contained" size="large" color="secondary">
                <Link to="/keyword">Search by Keyword</Link>
              </Button>
              <Button variant="contained" size="large" color="secondary">
                <Link to="/closestMRT">Search by nearest MRT</Link>
              </Button>
            </Stack>
            <br />
            <h3>Or browse from restaurants in the following categories:</h3>
            <Container maxWidth="lg" sx={{mt: 4}}>
              <Grid container spacing={4}>
                <CuisineCards />
              </Grid>
            </Container>
          </Route>
          <Route exact path="/keyword">
            <Keyword />
          </Route>
          <Route path="/closestMRT">
            <ClosestMRT />
          </Route>
          <Route path="/cuisines/:cuisine">
            <Cuisines/>
          </Route>
        </Switch>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
