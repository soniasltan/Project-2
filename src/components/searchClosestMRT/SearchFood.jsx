import React from "react";
import { useEffect, useState } from "react";
import RestoAddress from "./RestoAddress";

const SearchFood = (props) => {
  const [restos, setRestos] = useState("");
  
  const foodSearchUrl =
    "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=" +
    props.keyword +
    "&language=en&apikey=" +
    process.env.REACT_APP_TIH_API_KEY;

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(foodSearchUrl);
      const data = await res.json();
      console.log(data);
      const restoData = data?.data?.[0];
      setRestos(restoData);
    };
    fetchFood();
  }, [foodSearchUrl]);

  return (
    <>
      <h2>{restos.name}</h2>
      <RestoAddress address={restos.address} />
      <p>Closest MRT station: {restos.nearestMrtStation}</p>
      <p>Cuisine: {restos.cuisine}</p> <br />
      <h3>More about {restos.name}:</h3>
      <p>{restos.description}</p>
    </>
  );
};

export default SearchFood;
