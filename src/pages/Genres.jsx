import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GenresCard, GenresContainerBox, GenresTitle, ImageBG } from "../style/styles";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGenres = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}genres?key=${process.env.REACT_APP_API_KEY}`);
        setGenres(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log({ message: error });
      }
    };

    getGenres();
  }, []);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              fontFamily: "Chivo Mono",
            }}
          >
            Loading...
          </Typography>
        </Box>
      ) : (
        <GenresContainerBox>
          {genres?.map((genre) => (
            <Link to={`/genres_games/${genre.id}`} state={{ games: genre.games, name: genre.name }} style={{ textDecoration: "none" }} key={genre.id}>
              <GenresCard>
                <ImageBG src={genre.image_background} />
                <GenresTitle>{genre.name}</GenresTitle>
              </GenresCard>
            </Link>
          ))}
        </GenresContainerBox>
      )}
    </>
  );
};

export default Genres;
