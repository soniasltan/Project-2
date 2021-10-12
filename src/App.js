import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/material";
import Keyword from "./components/Keyword";
import Button from "@mui/material/Button";
import ClosestMRT from "./components/ClosestMRT";
import KeywordRestaurantCards from "./components/KeywordRestaurantCards";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <h1>Welcome to SG Food Finder</h1>
          <h3>
            Search up restaurants and other food establishments by one of the
            following:{" "}
          </h3>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained">
              <Link to="/keyword">Search by Keyword</Link>
            </Button>
            <Button variant="contained">
              <Link to="/closestMRT">Search by nearest MRT</Link>
            </Button>
          </Stack>
        </Route>
        <Route path="/keyword">
          <Keyword />
        </Route>
        <Route path="/keyword/:search">
          <KeywordRestaurantCards />
        </Route>
        <Route path="/closestMRT">
          <ClosestMRT />
        </Route>
      </div>
    </>
  );
}

export default App;
