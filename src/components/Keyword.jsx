import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { TextField, Stack } from "@mui/material";
import RestaurantCards from "./RestaurantCards";

const Keyword = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("idle");
  const [restos, setRestos] = useState([]);

  const foodSearchUrl =
    "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=" +
    search +
    "&language=en&apikey=" +
    process.env.REACT_APP_TIH_API_KEY;

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async () => {
    setStatus("pending");
    console.log("submitting", search);
    const res = await fetch(foodSearchUrl);
    const data = await res.json();
    setStatus("resolved");
    console.log(data);
    const restoData = data?.data;
    setRestos(restoData);
  };

  return (
    <>
      <div className="top">
        <h3>Discover new places to dine by entering a keyword below</h3>
      </div>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <TextField
          variant="outlined"
          margin="dense"
          id="keywordSearch"
          onChange={handleChange}
          label="Search by keyword"
          placeholder="Restaurant, cuisine..."
          value={search}
        />
        <Button
          sx={{ height: "54px" }}
          variant="contained"
          size="small"
          onClick={handleSubmit}
          color="secondary"
        >
          Search
        </Button>
      </Stack>
      <div className="results">
        <p>
          {status === "pending"
            ? "Fetching food..."
            : status === "resolved"
            ? "Search found the following eateries"
            : ""}
        </p>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <RestaurantCards restos={restos} />
          </Grid>
        </Container>
        {/* <br />
        <div className="moreResults">{status === "resolved" ? "Pull more results" : ""}</div> */}
      </div>
    </>
  );
};

export default Keyword;
