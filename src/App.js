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

function App() {
  return (
    <>
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
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant="contained">
                <Link to="/keyword">Search by Keyword</Link>
              </Button>
              <Button variant="contained">
                <Link to="/closestMRT">Search by nearest MRT</Link>
              </Button>
            </Stack>
            <h3>Or browse from restaurants in the following categories:</h3>
            <Container maxWidth="lg">
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
    </>
  );
}

export default App;
