import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImageBGPlatforms, PlatformsCard, PlatformsContainerBox, PlatformsTitle } from "../style/styles";

const Platforms = () => {
  const [platforms, setPlatforms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPlatforms = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}platforms?key=${process.env.REACT_APP_API_KEY}`);
        setPlatforms(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log({ message: error });
      }
    };

    getPlatforms();
  }, []);
  return (
    <>
      {isLoading ? (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "24px", fontFamily: "Chivo Mono" }}>Loading...</Typography>
        </Box>
      ) : (
        <PlatformsContainerBox>
          {platforms.map((platform) => (
            <Link
              to={`/platforms_games/${platform.id}`}
              state={{
                games: platform.games,
                name: platform.name,
              }}
              style={{ textDecoration: "none" }}
              key={platform.id}
            >
              <PlatformsCard>
                <ImageBGPlatforms src={platform.image_background} />
                <PlatformsTitle>{platform.name}</PlatformsTitle>
              </PlatformsCard>
            </Link>
          ))}
        </PlatformsContainerBox>
      )}
    </>
  );
};

export default Platforms;
