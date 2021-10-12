import React, { useState } from "react";
// import ReactDOM from "react-dom"
import Button from "@mui/material/Button"
import { TextField, Stack } from "@mui/material";
import KeywordRestaurantCards from "./KeywordRestaurantCards";

const KeywordSearch = (props) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("idle");
  const [restos, setRestos] = useState([]);


  const foodSearchUrl =
    "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=" +
    search +
    "&language=en&apikey=" +
    process.env.REACT_APP_TIH_API_KEY;

  const handleChange = (event) => {
    setSearch(event.target.value)
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
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
      {/* <InputLabel htmlFor="keywordSearch">Search by keyword: </InputLabel> */}
      <TextField
        variant="outlined"
        margin="dense"
        id="keywordSearch"
        onChange={handleChange}
        label="Search by keyword"
        placeholder="Restaurant, cuisine..."
        value={search}
      />
      <Button sx={{height: "54px"}} variant="contained" size="small" onClick={handleSubmit}>Search</Button>
      </Stack>
      <div className="results">
        <p>
          {status === "pending"
            ? "Fetching food..."
            : status === "resolved"
            ? "Search found the following eateries"
            : ""}
        </p>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{flexWrap: "wrap"}}>
        <KeywordRestaurantCards restos={restos}/>
        </Stack>
      </div>
    </>
  );
};

export default KeywordSearch;
