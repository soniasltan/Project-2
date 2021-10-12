import React, { useState } from "react";
// import ReactDOM from "react-dom"
import Button from "@mui/material/Button"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { TextField, Stack } from "@mui/material";

const KeywordSearch = (props) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("idle");
  const [restos, setRestos] = useState("");


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
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {restos?.[3]?.images?.[0]?.url}
        alt={restos?.[3]?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {restos?.[3]?.name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Stack>
      </div>
    </>
  );
};

export default KeywordSearch;
