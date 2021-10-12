import React, { useState } from "react";
import KeywordSearch from "./KeywordSearch";
// import SearchFood from "./SearchFood";

const Keyword = () => {
  // const [keyword, setKeyword] = useState("");
  // const [status, setStatus] = useState("idle");
  // const [restos, setRestos] = useState("");

  // const foodSearchUrl =
  //   "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=" +
  //   keyword +
  //   "&language=en&apikey=" +
  //   process.env.REACT_APP_TIH_API_KEY;

  // const fetchFood = async () => {
  //   const res = await fetch(foodSearchUrl);
  //   const data = await res.json();
  //   setStatus("resolved")
  //   console.log(data);
  //   const restoData = data?.data?.[0];
  //   setRestos(restoData)
  //   // setRestos(restoData);
  // };

  // const handleSubmit = async (input) => {
  //   setKeyword(input);
  //   setStatus("pending");
  //   console.log("submitting from app", input);
  //   const res = await fetch(foodSearchUrl);
  //   const data = await res.json();
  //   setStatus("resolved");
  //   console.log(data);
  //   const restoData = data?.data?.[0];
  //   setRestos(restoData);
  // };
  return (
    <>
      <div className="top">
        <p>Search by keyword</p>
        <KeywordSearch />
        {/* <p>OR</p>
      <p>Select from the following options</p> */}
</div>
      {/* <br />
      <div className="results">
        <p>
          {status === "pending"
            ? "Fetching food..."
            : status === "resolved"
            ? restos.name
            : ""}
        </p>
        <SearchFood keyword={keyword}/>
      </div> */}
    </>
  );
};

export default Keyword;
