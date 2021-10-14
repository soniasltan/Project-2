import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RestaurantCards from "./RestaurantCards";

const Cuisines = () => {
  const [status, setStatus] = useState("idle");
  const [restoData, setRestoData] = useState([]);
  let { cuisine } = useParams();

  const foodSearchUrl =
    "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=" +
    cuisine +
    "&language=en&apikey=" +
    process.env.REACT_APP_TIH_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setStatus("pending");
      const res = await fetch(foodSearchUrl);
      const data = await res.json();
      setStatus("resolved");
      setRestoData(data?.data.filter((restos) => restos.cuisine === cuisine));
    };
    fetchData();
  }, [foodSearchUrl, cuisine]);

  return (
    <>
      <h2>
        Check out one of these great {cuisine} restaurants for your next food
        adventure!
      </h2>
      <div className="results">
        <p>{status === "pending" ? "Fetching food..." : ""}</p>
        <Container maxWidth="lg" sx={{ mt: 7 }}>
          <Grid container spacing={4}>
            <RestaurantCards restos={restoData} />
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Cuisines;
