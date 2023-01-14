import { ArrowBack, ArrowForward, StarRate } from "@mui/icons-material";
import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ChipGenre,
  ChipPlatform,
  ContentBox,
  ContentTitle,
  DescGame,
  DetailBox,
  DetailGameGenres,
  DetailGameStoresBox,
  DetailGameText,
  DetailTitleGame,
  DotBox,
  ImgDetailBox,
  ImgSSBox,
  PlatformBox,
  ScreenshotBox,
  StoresLink,
  StoresLinkBox,
  StyledRouterLink,
} from "../style/styles";

const DetailGame = () => {
  const [detailGame, setDetailGame] = useState([]);
  const [screenshotGame, setScreenshotGame] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);
  const params = useParams();

  useEffect(() => {
    const getDetailGame = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}games/${params.id}?key=${process.env.REACT_APP_API_KEY}`);
        setDetailGame(response.data);
      } catch (error) {
        console.log({ message: error });
      }
    };

    const getScreenshotGame = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}games/${params.id}/screenshots?key=${process.env.REACT_APP_API_KEY}`);
        setScreenshotGame(response.data.results);
      } catch (error) {
        console.log({ message: error });
      }
    };

    getDetailGame();
    getScreenshotGame();
  }, [params.id]);

  var dateRelease = new Date(detailGame.released).toUTCString().slice(0, 16);

  const nextSlide = () => {
    if (slideIndex !== screenshotGame.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === screenshotGame.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(screenshotGame.length);
    }
  };

  const goToSlide = (slideIndex) => {
    setSlideIndex(slideIndex);
  };

  return (
    <DetailBox key={detailGame.id}>
      {/* IMAGE DETAIL */}
      <ImgDetailBox
        boxShadow={3}
        state={detailGame.background_image}
        sx={{
          width: { xs: "300px", sm: "480px", md: "720px", lg: "1080px" },
          height: { xs: "169px", sm: "270px", md: "405px", lg: "608px" },
          backgroundSize: { xs: "300px 169px", sm: "480px 270px", md: "720px 405px", lg: "1080px 608px" },
        }}
      ></ImgDetailBox>
      {/* TITLE GAME */}
      <DetailTitleGame fontWeight={"bold"} sx={{ fontSize: { xs: "20px", md: "42px" }, textAlign: "center" }}>
        {detailGame.name_original}
      </DetailTitleGame>
      {/* RELEASED AND RATING */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <DetailGameText mb={"20px"} sx={{ fontSize: { md: "16px", xs: "12px" } }}>
          Released {dateRelease}
        </DetailGameText>
        <Box sx={{ p: "5px 10px", border: "2px solid", borderRadius: "8px", color: "warning.main" }}>
          <DetailGameText sx={{ fontSize: { md: "30px", xs: "20px" } }}>
            <StarRate sx={{ fontSize: { md: "30px", xs: "20px" }, mr: 1 }} /> {detailGame.rating}
          </DetailGameText>
        </Box>
      </Box>
      {/* GENRES */}
      <ContentBox mb={2}>
        <ContentTitle mb={2} sx={{ fontSize: { md: "24px", xs: "18px" } }}>
          GENRES
        </ContentTitle>
        <DetailGameGenres sx={{ width: { xs: "30%", sm: "50%", md: "75%", lg: "100%" } }}>
          {detailGame.genres &&
            detailGame.genres.map((genre) => (
              <StyledRouterLink key={genre.id} to={`/genres_games/${genre.id}`}>
                <ChipGenre
                  sx={{
                    backgroundColor: "primary.main",
                    color: "secondary.light",
                    ":hover": { backgroundColor: "primary.light" },
                    fontSize: { md: "18px", xs: "12px" },
                    padding: { md: "3px", xs: "1px" },
                  }}
                  label={genre.name}
                />
              </StyledRouterLink>
            ))}
        </DetailGameGenres>
      </ContentBox>
      {/* PLATFORMS */}
      <ContentBox mb={2}>
        <ContentTitle mb={2} sx={{ fontSize: { md: "24px", xs: "18px" } }}>
          PLATFORMS
        </ContentTitle>
        <PlatformBox sx={{ width: { xs: "30%", sm: "50%", md: "75%", lg: "100%" } }}>
          {detailGame.platforms &&
            detailGame.platforms.map((platform) => (
              <StyledRouterLink key={platform.id} to={`/platforms_games/${platform.platform.id}`}>
                <ChipPlatform
                  variant="outlined"
                  sx={{
                    ":hover": { backgroundColor: "secondary.light" },
                    fontSize: { md: "18px", xs: "12px" },
                    padding: { md: "3px", xs: "1px" },
                  }}
                  color="primary"
                  label={platform.platform.name}
                />
              </StyledRouterLink>
            ))}
        </PlatformBox>
      </ContentBox>
      {/* ABOUT */}
      <ContentBox mb={2}>
        <ContentTitle mb={2} sx={{ fontSize: { md: "24px", xs: "18px" } }}>
          ABOUT
        </ContentTitle>
        <DescGame
          sx={{
            fontSize: { md: "18px", xs: "14px" },
            width: { xs: "30%", sm: "50%", md: "75%", lg: "100%" },
          }}
          dangerouslySetInnerHTML={{ __html: detailGame.description }}
        ></DescGame>
      </ContentBox>
      {/* SCREENSHOT */}
      <ContentBox mb={2}>
        <ContentTitle mb={2} sx={{ fontSize: { md: "24px", xs: "18px" } }}>
          SCREENSHOT
        </ContentTitle>
        <ScreenshotBox>
          <ArrowBack
            sx={{
              color: "secondary.light",
              cursor: "pointer",
              bgcolor: "primary.main",
              borderRadius: "4px",
              fontSize: { lg: "34px", md: "30px", sm: "26px", xs: "22px" },
            }}
            onClick={prevSlide}
          />
          <Box>
            {screenshotGame?.map((ss, index) => (
              <Box key={index} className={slideIndex === index + 1 ? "slide anim" : "slide"}>
                {slideIndex === index + 1 ? (
                  <ImgSSBox
                    key={ss.id}
                    src={ss.image}
                    sx={{
                      width: { xs: "300px", sm: "480px", md: "700px", lg: "800px" },
                      height: { xs: "169px", sm: "270px", md: "394px", lg: "450px" },
                      backgroundSize: { xs: "300px 169px", sm: "480px 270px", md: "700px 394px", lg: "800px 450px" },
                    }}
                  />
                ) : null}
              </Box>
            ))}
          </Box>
          <ArrowForward
            sx={{
              color: "secondary.light",
              cursor: "pointer",
              bgcolor: "primary.main",
              borderRadius: "4px",
              fontSize: { lg: "34px", md: "30px", sm: "26px", xs: "22px" },
            }}
            onClick={nextSlide}
          />
        </ScreenshotBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: "5px",
          }}
        >
          {screenshotGame?.map((slide, index) => (
            <DotBox
              key={slide.id}
              sx={{
                width: { lg: "20px", md: "18px", xs: "15px" },
                height: { lg: "20px", md: "18px", xs: "15px" },
              }}
              onClick={() => goToSlide(index + 1)}
              className={slideIndex === index + 1 ? "active" : ""}
            ></DotBox>
          ))}
        </Box>
      </ContentBox>
      {/* STORE */}
      <ContentBox mb={2}>
        <ContentTitle mb={2} sx={{ fontSize: { md: "24px", xs: "18px" } }}>
          BUY IN STORE
        </ContentTitle>
        <DetailGameStoresBox sx={{ width: { xs: "30%", sm: "50%", md: "75%", lg: "100%" } }}>
          {detailGame.stores?.map((store) => (
            <StoresLinkBox key={store.id} borderColor={"primary.main"}>
              <StoresLink key={store.store.id} href={`https://${store.store.domain}`} target="_blank" color="primary.main">
                {store.store.name}
              </StoresLink>
            </StoresLinkBox>
          ))}
        </DetailGameStoresBox>
      </ContentBox>
    </DetailBox>
  );
};

export default DetailGame;
