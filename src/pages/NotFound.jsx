import { Typography } from "@mui/material";
import React from "react";
import { ContentBox, DetailBox } from "../style/styles";

const NotFound = () => {
  return (
    <DetailBox>
      <ContentBox>
        <Typography variant="h2" sx={{ fontFamily: "Chivo Mono", fontWeight: "bold" }}>
          NOT FOUND!
        </Typography>
        <Typography variant="span" sx={{ fontFamily: "Chivo Mono", fontWeight: "bold" }}>
          Please go to Another Page!
        </Typography>
      </ContentBox>
    </DetailBox>
  );
};

export default NotFound;
