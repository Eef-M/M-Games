import { Typography } from "@mui/material";
import React from "react";
import { ContentBox, DetailBox } from "../style/styles";

const NotFound = () => {
  return (
    <DetailBox>
      <ContentBox>
        <Typography sx={{ fontFamily: "Chivo Mono", fontWeight: "bold", fontSize: "24px" }}>NOT FOUND!</Typography>
        <Typography sx={{ fontFamily: "Chivo Mono", fontWeight: "bold", fontSize: "14px" }}>Please go to Another Page!</Typography>
      </ContentBox>
    </DetailBox>
  );
};

export default NotFound;
