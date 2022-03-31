import React from "react";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        boxShadow: "2px -2px 2px grey",
      }}
    >
      <h5 style={{ margin: "0px" }}>Copyright © 2022, Footer Limited. All Rights Reserved</h5>
      <div>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <TwitterIcon />
        </IconButton>
        <IconButton color="error" aria-label="upload picture" component="span">
          <YouTubeIcon />
        </IconButton>
      </div>
    </div>
  );
}
