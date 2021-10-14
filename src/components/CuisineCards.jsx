import React from "react"
import {Link} from "react-router-dom"
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import cuisines from "../data/cuisines"

const CuisineCards = () => {

      let cards = cuisines.map((data) => {
        return (
          <Grid item key={data.cuisine} xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Link to={"/cuisines/"+data.cuisine} style={{color: "black"}}>
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
              </Link>
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