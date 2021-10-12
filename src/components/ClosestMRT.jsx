import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import mrtStations from "../data/mrtStations";
// import SearchMRT from "./SearchMRT"

const ClosestMRT = (props) => {
  const [line, setLine] = useState("");
  const [station, setStation] = useState("");
  const [input, setInput] = useState([]);

  const [url, setUrl] = useState(
    "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=" +
      "food" +
      "&language=en&apikey=" +
      process.env.REACT_APP_TIH_API_KEY
  );

  const selectedLineStations = mrtStations.data.filter(
    (selected) => selected.lineName === line
  );
  const stations = selectedLineStations.map((stations) => {
    return (
      <MenuItem key={stations.stationName} value={stations.stationName}>
        {stations.stationName}
      </MenuItem>
    );
  });

  const handleLineSelect = (event) => {
    setLine(event.target.value);
  };

  const handleStationSelect = (event) => {
    setStation(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("handling submit")
    const res = await fetch(url);
    let data = await res.json();
    let token = data?.nextToken
    console.log("unfiltered", data);
    const restoData = data?.data.filter(
      (search) =>
        search.nearestMrtStation === station ||
        search.nearestMrtStation === station + " Station" ||
        search.nearestMrtStation === station + " MRT Station"
    );
    setInput(restoData)
    console.log("filtered", restoData)
    console.log("new input", input)
    // for (let i=0; i<5; i++) {
    // if (input.length < 3) {
    //   console.log("iterating")
    //   console.log("first token", token)
    //   let newRes = await fetch(
    //     "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=food&nextToken=" +
    //       token +
    //       "%3D&language=en&apikey=" +
    //       process.env.REACT_APP_TIH_API_KEY
    //   );
    //   let newData = await newRes.json();
    //   console.log("next page", newData)
    //   token=newData.nextToken
    //   let newRestoData = newData?.data.filter(
    //     (search) =>
    //       search.nearestMrtStation === station ||
    //       search.nearestMrtStation === station + " Station" ||
    //       search.nearestMrtStation === station + " MRT Station"
    //   );
    //   console.log("new token", token)
    //   console.log("newRestoData", newRestoData)
    //   console.log("second call input", input)
    //   return (
    //     setInput(newRestoData, ...restoData)
    //   ) 
    // } 
    // }
  };

  const lineSelectStyle = {
    backgroundColor:
      line === "East West Line"
        ? "green"
        : line === "North South Line"
        ? "red"
        : line === "North East Line"
        ? "purple"
        : line === "Circle Line"
        ? "#ffcc33"
        : line === "Downtown Line"
        ? "blue"
        : "none",
    color: "white",
  };

  return (
    <>
      <p>Search by closest MRT selection</p>

      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ width: 300 }}>
          <InputLabel>Select MRT Line</InputLabel>
          <Select
            id="mrtLineSelect"
            value={line}
            label="MRT Line"
            onChange={handleLineSelect}
            variant={"standard"}
            sx={lineSelectStyle}
          >
            <MenuItem
              value={"East West Line"}
              sx={{ backgroundColor: "rgba(0,116,16,1)", color: "white" }}
            >
              East West Line
            </MenuItem>
            <MenuItem
              value={"North South Line"}
              sx={{ backgroundColor: "red", color: "white" }}
            >
              North South Line
            </MenuItem>
            <MenuItem
              value={"North East Line"}
              sx={{ backgroundColor: "purple", color: "white" }}
            >
              North East Line
            </MenuItem>
            <MenuItem
              value={"Circle Line"}
              sx={{ backgroundColor: "#ffcc33", color: "white" }}
            >
              Circle Line
            </MenuItem>
            <MenuItem
              value={"Downtown Line"}
              sx={{ backgroundColor: "blue", color: "white" }}
            >
              Downtown Line
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 120, margin: "20px 0 0 0" }}>
        <FormControl sx={{ width: 300 }}>
          <InputLabel>Select Station</InputLabel>
          <Select
            id="stationSelect"
            value={station}
            label="Select Station"
            onChange={handleStationSelect}
            variant={"standard"}
          >
            {stations}
          </Select>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disableElevation
            sx={{ margin: "15px 0 0 0", backgroundColor: "lightgrey" }}
          >
            Search
          </Button>
        </FormControl>
      </Box>
      <br />
      <h2>{input?.[0]?.name}</h2>
    </>
  );
};

export default ClosestMRT;
