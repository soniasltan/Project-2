import React, { useState } from "react";
// import ReactDOM from "react-dom"
import Button from "@mui/material/Button"
import { TextField, Stack } from "@mui/material";

const KeywordSearch = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value)
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
      <Button sx={{height: "54px"}} variant="contained" size="small" onClick={()=>props.handleSubmit(search)}>Search</Button>
      </Stack>
    </>
  );
};

export default KeywordSearch;
