import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { useParams } from "react-router-dom"

const KeywordRestaurantCards = (props) => {

  let restoCards = props.restos.map((data) => {
    return (
      <Card key={data.uuid} sx={{ width: 345, height: 300, margin: "10px 10px 10px 10px" }}>
        <CardMedia
          component="img"
          height="140"
          image={
            data.images.length === 0
            ? "https://platerate.com/images/tempfoodnotext.png"
            :data.images?.[0]?.url === ""
            ? "https://platerate.com/images/tempfoodnotext.png"
            : data.images?.[0]?.url !== ""
            ? data.images?.[0]?.url
            : "https://platerate.com/images/tempfoodnotext.png"
          }
          alt={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
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
    );
  });
  return (
    <>
      {restoCards}
    </>
  );
};

export default KeywordRestaurantCards;
