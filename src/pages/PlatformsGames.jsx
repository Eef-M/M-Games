import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BoxContainerPlatform, BoxGamePlatform, PlatformGameBox, PlatformNameText, TitleGame } from "../style/styles";

const PlatformsGames = () => {
  const { id } = useParams();
  const [platformGames, setPlatformGames] = useState([]);

  useEffect(() => {
    const getPlatforms = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}platforms?key=${process.env.REACT_APP_API_KEY}`);

        setPlatformGames(response.data.results);
      } catch (error) {
        console.log({ message: error });
      }
    };

    getPlatforms();
  }, []);

  return (
    <BoxContainerPlatform>
      {platformGames.map((pg) =>
        pg.id === Number(id) ? (
          <Box key={pg.id} sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 3 }}>
            <PlatformNameText>{pg.name}</PlatformNameText>
            <PlatformGameBox>
              {pg.games.map((game) => (
                <Link to={`/detail/${game.id}`} state={{ screenshot: game.short_screenshots }} style={{ textDecoration: "none" }}>
                  <BoxGamePlatform bgcolor="primary.box" key={game.id}>
                    <TitleGame color="secondary">{game.name}</TitleGame>
                  </BoxGamePlatform>
                </Link>
              ))}
            </PlatformGameBox>
          </Box>
        ) : null
      )}
    </BoxContainerPlatform>
  );
};

export default PlatformsGames;
