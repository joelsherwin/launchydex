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
import { Shimmer } from "react-shimmer";
import "./LaunchCard.css";

const ShimmerCard = (props) => {
  return (
    <Card
      className="launch-card"
      sx={{
        height: 250,
        width: 800,
        maxWidth: 800,
        margin: 1,
        display: "flex",
      }}
    >
      <CardMedia
        sx={{ width: "100%", objectFit: "cover", maxWidth: 200, minWidth: 200 }}
        image="https://images.squarespace-cdn.com/content/v1/574faff6f8baf35e5da43485/1495284929670-UWO1P40E52N649BBVSNS/rocket_3.gif?format=300w"
        title="green iguana"
      />
      <CardContent>
        <Shimmer width={300} height={40} />
        <br />
        <Shimmer width={150} height={20} />
        <br />
        <Shimmer width={450} height={10} />
        <br />
        <Shimmer width={450} height={10} />
      </CardContent>
    </Card>
  );
};

export default ShimmerCard;
