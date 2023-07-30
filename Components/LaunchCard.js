import React from "react";
import ReactDOM from "react-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@mui/material";

import "./LaunchCard.css";

const LaunchCard = (props) => {
  return (
    <Card
      className="launch-card"
      sx={{
        height: 250,
        width: "50%",
        maxWidth: 800,
        margin: 1,
        display: "flex",
      }}
    >
      <CardMedia
        className="card-image"
        sx={{ width: "100%", objectFit: "cover", maxWidth: 200, minWidth: 200 }}
        image={props.data.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.data.name}
        </Typography>
        <Typography gutterBottom variant="overline" color="text.secondary">
          {new Date(props.data.net).toDateString()}
        </Typography>
        <br />
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ lineHeight: 1 }}
        >
          {props.data.pad.location.name}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ position: "relative", top: 5, overflow: "scroll", height: 115 }}
        >
          {props.data.mission
            ? props.data.mission.description
            : "Classified. Data for this launch has not been disclosed"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LaunchCard;
