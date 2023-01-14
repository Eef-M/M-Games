import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BoxContainer, BoxGame, GenreGameBox, GenreNameText, TitleGame } from "../style/styles";

const GenresGames = () => {
  const { id } = useParams();

  const [genresGames, setGenresGames] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}genres?key=${process.env.REACT_APP_API_KEY}`);
        setGenresGames(response.data.results);
      } catch (error) {
        console.log({ message: error });
      }
    };

    getGenres();
  }, []);

  return (
    <BoxContainer>
      {genresGames?.map((gg) =>
        gg.id === Number(id) ? (
          <Box
            key={gg.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <GenreNameText>{gg.name}</GenreNameText>
            <GenreGameBox>
              {gg.games?.map((game) => (
                <Link to={`/detail/${game.id}`} state={{ screenshot: game.short_screenshots }} style={{ textDecoration: "none" }}>
                  <BoxGame bgcolor="primary.box" key={game.id}>
                    <TitleGame color="secondary">{game.name}</TitleGame>
                  </BoxGame>
                </Link>
              ))}
            </GenreGameBox>
          </Box>
        ) : null
      )}
    </BoxContainer>
  );
};

export default GenresGames;
