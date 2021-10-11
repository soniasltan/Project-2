import React, {useState} from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import mrtStations from "../data/mrtStations"

const ClosestMRT = () => {

  const [line, setLine] = useState("");
  const [station, setStation] = useState("");

      const selectedLineStations = mrtStations.data.filter(selected => selected.lineName === line)
      const stations = selectedLineStations.map((stations) => {
        return (
        <MenuItem key={stations.stationName} value={stations.stationName}>{stations.stationName}</MenuItem>
      )})

    const handleLineSelect = (event) => {
      setLine(event.target.value)
    }

    const handleStationSelect = (event) => {
      setStation(event.target.value)
    }

    const lineSelectStyle = {
      backgroundColor: line === "East West Line" 
      ? "green" 
      : line === "North South Line" 
      ? "red"
      : line === "North East Line"
      ? "purple"
      : line === "Circle Line" 
      ? "#ffcc33" 
      : line === "Downtown Line" 
      ? "blue"
      : "lightgrey", 
      color: "white"
      }

    return(
      <>
        <p>Closest MRT selection</p>

        <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{width: 300}}>
        <InputLabel>Select MRT Line</InputLabel>
        <Select
          id="mrtLineSelect"
          value={line}
          label="MRT Line"
          onChange={handleLineSelect}
          variant={"standard"}
          sx={lineSelectStyle}
        >
          <MenuItem value={"East West Line"} sx={{backgroundColor: "rgba(0,116,16,1)", color: "white"}}>East West Line</MenuItem>
          <MenuItem value={"North South Line"} sx={{backgroundColor: "red", color: "white"}}>North South Line</MenuItem>
          <MenuItem value={"North East Line"} sx={{backgroundColor: "purple", color: "white"}}>North East Line</MenuItem>
          <MenuItem value={"Circle Line"} sx={{backgroundColor: "#ffcc33", color: "white"}}>Circle Line</MenuItem>
          <MenuItem value={"Downtown Line"} sx={{backgroundColor: "blue", color: "white"}}>Downtown Line</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 120, marginTop:"20px" }}>
      <FormControl sx={{width: 300}}>
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
      </FormControl>
    </Box>

        </>
    )
}

export default ClosestMRT