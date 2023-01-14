import { Box, Pagination, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GameBox, HomeBox, TitleGame } from "../style/styles";

const Home = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getGames = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}games?key=${process.env.REACT_APP_API_KEY}&page=1`);
        setGames(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log({ message: error });
      }
    };

    getGames();
  }, []);

  const thePage = async (currentPage) => {
    const response = await axios.get(`${process.env.REACT_APP_BASEURL}games?key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`);
    const data = response.data.results;
    return data;
  };

  const handleClickPage = async (event, value) => {
    setIsLoading(true);
    const pageNumber = await thePage(value);
    setGames(pageNumber);
    setPage(value);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "24px", fontFamily: "Chivo Mono" }} component="h3">
            Loading...
          </Typography>
        </Box>
      ) : (
        <div>
          <HomeBox sx={{ my: 4 }}>
            {games?.map((game) => (
              <Link to={`/detail/${game.id}`} style={{ textDecoration: "none", position: "relative" }} key={game.id}>
                <GameBox boxShadow={3} bgcolor="primary.box">
                  <img id="image" src={game.background_image} width="340px" height="191px" alt="game_image" />
                  <TitleGame color="secondary">{game.name}</TitleGame>
                </GameBox>
              </Link>
            ))}
          </HomeBox>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Pagination count={30} shape="rounded" color="primary" onChange={handleClickPage} page={page} siblingCount={0} size="small" />
          </Box>
        </div>
      )}
    </div>
  );
};

export default Home;
