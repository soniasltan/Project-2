import React, { useState } from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { useParams } from "react-router-dom"

const KeywordRestaurantCards = (props) => {
  const [open, setOpen] = useState({ state: false, id: "" });
  const handleOpen = (event) => {
    console.log("data" + event.target.value);
    setOpen({state: true, id: event.target.value});
  };
  const handleClose = () => setOpen({ state: false, id: {} });

  const restoName = props.restos.find((x) => x.uuid === open.id)

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid lightgrey",
    borderRadius: "5px",
    p: 4,
  };

  let restoCards = props.restos.map((data) => {
    return (
      <Grid item key={data.uuid} xs={12} sm={6} md={4}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            height="140"
            image={
              data.images.length === 0
                ? "https://platerate.com/images/tempfoodnotext.png"
                : data.images?.[0]?.url === ""
                ? "https://platerate.com/images/tempfoodnotext.png"
                : data.images?.[0]?.url !== ""
                ? data.images?.[0]?.url
                : "https://platerate.com/images/tempfoodnotext.png"
            }
            alt={data.name}
          />
          <CardContent sx={{ flexGrow: 1 }}>
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
            <Button size="small" value={data.uuid} onClick={handleOpen}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
  return (
    <>
      {restoCards}
      <Modal
        open={open.state}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          sx: { background: "rgba(56, 54, 54, 0.03)" },
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h" component="h2">
            {restoName?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Address: {restoName?.address?.streetName}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default KeywordRestaurantCards;
