import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import LaunchCard from "./LaunchCard";
import ShimmerCard from "./ShimmerCard";

import "./CardContainer.css";
import { STALE_DATA } from "./../utils/staledata.js";

const CardContainer = () => {
  const [launchData, setLaunchdata] = useState([]);
  const fetchLaunchData = async () => {
    const data = await fetch(
      "https://lldev.thespacedevs.com/2.2.0/launch/upcoming"
    );
    const JSONdata = await data.json();
    setLaunchdata(JSONdata);
  };
  useEffect(() => {
    fetchLaunchData();
  }, []);
  if (launchData.length === 0) {
    return (
      <div className="card-container">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    );
  }
  return (
    <div className="card-container">
      {launchData.results?.map((launch) => {
        return <LaunchCard data={launch} />;
      })}
    </div>
  );
};

export default CardContainer;
