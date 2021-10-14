import React, {useState, useHistory} from "react"
import {Route} from "react-router-dom"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CuisineCards = () => {
    const [search, setSearch] = useState("")
    const cuisines = [
        {cuisine: "Chinese",
        image: "https://www.thebestsingapore.com/wp-content/uploads/2019/02/Hai-Tien-Lo-restaurant.jpg"}, 
        {cuisine: "Indian", 
        image: "https://static.themoscowtimes.com/image/article_1360/3a/Indiandishes002.jpg"}, 
        {cuisine: "Japanese",
        image: "https://images.japancentre.com/page_elements/image1s/1513/original/sushi-bars-best-japanese-food.jpg?1470240553"},
        {cuisine: "Thai",
        image: "https://www.englishclub.com/images/vocabulary/food/thai/thai-food.jpg"},
        {cuisine: "Western",
        image: "https://cdn.vox-cdn.com/thumbor/pTCnkk0R2lN_ck7a3rpj5jCi7a4=/0x167:2000x1167/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/22424674/untitled_6669.jpg"},
        {cuisine: "Italian",
        image: "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2930%2Ftrend20200903104959.jpg"} 
    ]

    const foodSearchUrl =
    "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=" +
    search +
    "&language=en&apikey=" +
    process.env.REACT_APP_TIH_API_KEY;

      const handleCuisineSearch = (event) => {
          setSearch(event.target.value)
      }

      let cards = cuisines.map((data) => {
        return (
          <Grid item key={data.cuisine} xs={12} sm={6} md={4}>
            <Card onClick={handleCuisineSearch} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="140"
                image={
                  data.image
                }
                alt={data.cuisine}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {data.cuisine}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      });

    return (
        <>
        {cards}
        </>
    )
}

export default CuisineCards