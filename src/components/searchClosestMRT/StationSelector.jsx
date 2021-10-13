import React from "react"

const StationSelector = () => {
    return (
        <>
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
        </>
    )
}

export default StationSelector