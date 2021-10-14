import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardMap from "./CardMap";

const RestaurantCards = (props) => {
  const [open, setOpen] = useState({ state: false, id: "" });
  const handleOpen = (event) => {
    setOpen({ state: true, id: event.target.value });
  };
  const handleClose = () => setOpen({ state: false, id: {} });

  const restoName = props.restos.find((x) => x.uuid === open.id);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: 425,
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
          </CardContent>
          <CardActions>
            <Button size="small" value={data.uuid} onClick={handleOpen} color="secondary">
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
          sx: { background: "rgba(56, 54, 54, 0.6)" },
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h" component="h2">
            {restoName?.name}
          </Typography>
          <Typography id="modal-modal-title" sx={{ marginBottom: 5 }}>
            <p>
              {(restoName?.description === "") | "Description"
                ? restoName?.description
                : ""}
            </p>
          </Typography>
          <Typography id="modal-modal-address" sx={{ my: 0.2 }}>
            <p>
              Address:{" "}
              {restoName?.address?.block !== ""
                ? restoName?.address?.block + " "
                : ""}
              {restoName?.address?.streetName}
              {restoName?.address?.floorNumber !== ""
                ? ", " +
                  restoName?.address?.floorNumber +
                  "-" +
                  restoName?.address?.unitNumber
                : ""}
              {restoName?.address?.buildingName !== ""
                ? ", " + restoName?.address?.buildingName
                : ""}
              {restoName?.address?.postalCode !== ""
                ? ", Singapore " + restoName?.address?.postalCode
                : ""}
            </p>
            <p>
              {restoName?.nearestMrtStation !== ""
                ? "Closest MRT Station: " + restoName?.nearestMrtStation
                : ""}
            </p>
            <p>
              {restoName?.cuisine !== ""
                ? "Cuisine: " + restoName?.cuisine
                : ""}
            </p>
            <p>
              {restoName?.contact?.primaryContactNo !== ""
                ? "Contact: " + restoName?.contact?.primaryContactNo
                : ""}
            </p>
            <p>
              {restoName?.rating !== "" ? "Rating: " + restoName?.rating : ""}
            </p>
          </Typography>
          <CardMap
            location={restoName?.location}
            style={{ position: "absolute", left: "50%" }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default RestaurantCards;
