// import React, { useState } from "react";
// import { Route, Switch, useRouteMatch } from "react-router-dom";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import { TextField, Stack } from "@mui/material";
// import KeywordRestaurantCards from "./KeywordRestaurantCards";
// import KeywordRestaurantDetails from "./KeywordRestaurantDetails";

// const KeywordSearch = (props) => {
//   let match = useRouteMatch()

//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("idle");
//   const [restos, setRestos] = useState([]);

//   const foodSearchUrl =
//     "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=" +
//     search +
//     "&language=en&apikey=" +
//     process.env.REACT_APP_TIH_API_KEY;

//   const handleChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const handleSubmit = async () => {
//     setStatus("pending");
//     console.log("submitting", search);
//     const res = await fetch(foodSearchUrl);
//     const data = await res.json();
//     setStatus("resolved");
//     console.log(data);
//     const restoData = data?.data;
//     setRestos(restoData);
//   };

//   return (
//     <>
//       <Stack
//         direction="row"
//         spacing={2}
//         alignItems="center"
//         justifyContent="center"
//       >
//         <TextField
//           variant="outlined"
//           margin="dense"
//           id="keywordSearch"
//           onChange={handleChange}
//           label="Search by keyword"
//           placeholder="Restaurant, cuisine..."
//           value={search}
//         />
//         <Button
//           sx={{ height: "54px" }}
//           variant="contained"
//           size="small"
//           onClick={handleSubmit}
//         >
//           Search
//         </Button>
//       </Stack>
//       <div className="results">
//         <p>
//           {status === "pending"
//             ? "Fetching food..."
//             : status === "resolved"
//             ? "Search found the following eateries"
//             : ""}
//         </p>
//         <Container maxWidth="lg">
//           <Grid container spacing={4}>
//             <KeywordRestaurantCards restos={restos} />
//           </Grid>
//         </Container>
//       </div>
//       <Switch>
//         <Route path={match.path+"/:restoName"}>
//           <KeywordRestaurantDetails />
//         </Route>
//       </Switch>
//     </>
//   );
// };

// export default KeywordSearch;
