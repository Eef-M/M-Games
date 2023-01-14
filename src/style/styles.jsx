import { AppBar, Box, Chip, createTheme, Link, ListItemButton, Typography } from "@mui/material";
import { amber, blueGrey, grey, lightBlue } from "@mui/material/colors";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const StyledTheme = (mode) =>
  createTheme({
    palette: {
      primary: {
        main: mode ? lightBlue[900] : lightBlue[300],
        light: mode ? lightBlue[500] : lightBlue[200],
        box: mode ? blueGrey[50] : grey[900],
      },
      secondary: {
        main: mode ? grey[800] : grey[200],
        light: mode ? blueGrey[50] : blueGrey[900],
      },
      warning: {
        main: mode ? amber[700] : amber[400],
      },
      mode: mode ? "light" : "dark",
    },
  });

// Navbar

export const StyledNavbar = styled(AppBar)(({ mode }) => ({
  borderRadius: 15,
  padding: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "space-between",
  background: JSON.parse(mode.toLowerCase()) ? `${blueGrey[50]} !important` : `${grey[900]} !important`,
  color: JSON.parse(mode.toLowerCase()) ? `${grey[800]} !important` : `${blueGrey[50]} !important`,
}));

export const StyledItemButton = styled(Link)(({ mode }) => ({
  fontWeight: "bold !important",
  textDecoration: "none !important",
  color: JSON.parse(mode.toLowerCase()) ? `${grey[800]} !important` : `${grey[200]} !important`,
  ":hover": {
    color: JSON.parse(mode.toLowerCase()) ? `${blueGrey[600]} !important` : `${blueGrey[300]} !important`,
  },
  "&.active": {
    color: JSON.parse(mode.toLowerCase()) ? `${lightBlue[900]} !important` : `${lightBlue[300]} !important`,
    textDecoration: "underline !important",
  },
}));

export const StyledListItemButton = styled(ListItemButton)(({ mode }) => ({
  textAlign: "center !important",
  color: JSON.parse(mode.toLowerCase()) ? `${grey[800]} !important` : `${grey[200]} !important`,
  ":hover": {
    background: JSON.parse(mode.toLowerCase()) ? `${blueGrey[100]} !important` : `${grey[800]} !important`,
    color: JSON.parse(mode.toLowerCase()) ? `${blueGrey[600]} !important` : `${blueGrey[100]} !important`,
  },
  "&.active": {
    color: JSON.parse(mode.toLowerCase()) ? `${blueGrey[50]} !important` : `${blueGrey[900]} !important`,
    background: JSON.parse(mode.toLowerCase()) ? `${lightBlue[900]} !important` : `${lightBlue[300]} !important`,
  },
}));

// Home Page
export const HomeBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  flexWrap: "wrap",
  gap: 20,
});

export const GameBox = styled(Box)({
  width: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 5,
  borderRadius: 8,
  overflow: "hidden",
  padding: "0 7px 7px 7px",
  transition: "all ease-in-out .4s",
  cursor: "pointer",
  opacity: 0.9,
  ":hover": {
    transform: "scale(1.06)",
    opacity: 1,
  },
});

export const TitleGame = styled(Typography)`
  && {
    font-family: "Chivo Mono", sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
`;

// Detail Game Page
export const DetailBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
});

export const ContentBox = styled(Box)({
  width: "1080px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  my: 2,
});

export const ContentTitle = styled(Typography)`
  && {
    font-weight: bold;
    font-family: "Chivo Mono", sans-serif;
  }
`;

export const ImgDetailBox = styled(Box)(({ state }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15,
  backgroundImage: `url(${state})`,
  backgroundPosition: "center",
}));

export const DetailTitleGame = styled(Typography)`
  && {
    font-family: "Chivo Mono", sans-serif;
    font-weight: "bold";
  }
`;

export const DescGame = styled(Typography)`
  && {
    font-family: "Chivo Mono", sans-serif;
    text-align: justify;
    font-weight: 500;
  }
`;

export const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
`;

export const ChipGenre = styled(Chip)`
  && {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const ChipPlatform = styled(Chip)`
  && {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const DetailGameText = styled(Typography)`
  && {
    font-family: "Chivo Mono", sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DetailGameGenres = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  width: "1080px",
});

export const ScreenshotBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px",
});

export const ImgSSBox = styled(Box)(({ src }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${src})`,
  backgroundPosition: "center",
}));

export const DotBox = styled(Box)({
  borderRadius: "50%",
  border: "3px solid rgb(139, 139, 139)",
  margin: "0 5px",
  background: "rgb(255, 255, 255)",
  cursor: "pointer",
  "&.active": {
    background: "rgb(0, 0, 0)",
  },
});

export const PlatformBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "20px",
});

export const DetailGameStoresBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
});

export const StoresLinkBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 6,
  border: "3px solid",
  transition: "all ease-in-out 0.3s",
  ":hover": {
    transform: "scale(1.1)",
    borderRadius: 4,
  },
});

export const StoresLink = styled(Link)`
  && {
    text-decoration: none;
    font-weight: bold;
  }
`;

// Genres Page
export const GenresContainerBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 15,
});

export const GenresCard = styled(Box)({
  display: "flex",
  width: "350px",
  height: "50px",
  alignItems: "center",
  justifyContent: "center",
  background: "black",
  transition: "all ease-in-out 0.4s",
  boxShadow: "rgba(3, 155, 229, 0.25) 0px 0.0625em 0.0625em, rgba(3, 155, 229, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
  ":hover": {
    overflow: "hidden",
    boxShadow: "rgba(3, 155, 229, 0.3) 0px 1px 2px 0px, rgba(3, 155, 229, 0.15) 0px 2px 6px 2px",
    height: "197px",
  },
});

export const ImageBG = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0.5;
  transition: all ease-in-out 0.3s;
  :hover {
    opacity: 0.85;
  }
`;

export const GenresTitle = styled(Typography)`
  && {
    font-size: 18px;
    font-family: "Chivo Mono", sans-serif;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 0 #000;
    font-weight: bold;
    color: white;
    text-align: center;
    position: absolute;
    pointer-events: none;
  }
`;

// Detail Genre
export const BoxContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const GenreNameText = styled(Typography)`
  && {
    font-family: "Chivo Mono", sans-serif;
    font-weight: bold;
    font-size: 36px;
  }
`;

export const GenreGameBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 10,
});

export const BoxGame = styled(Box)({
  padding: 18,
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  flexDirection: "column",
  transition: "all ease-in-out 0.4s",
  ":hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 0px 8px 1px rgba(41, 182, 246, 1) inset",
  },
});

// Platforms page
export const PlatformsContainerBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 5,
});

export const PlatformsCard = styled(Box)({
  display: "flex",
  width: "200px",
  height: "50px",
  alignItems: "center",
  justifyContent: "center",
  background: "black",
  transition: "all ease-in-out 0.5s",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "rgba(3, 155, 229, 0.25) 0px 0.0625em 0.0625em, rgba(3, 155, 229, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
  ":hover": {
    overflow: "hidden",
    boxShadow: "rgba(3, 155, 229, 0.3) 0px 1px 2px 0px, rgba(3, 155, 229, 0.15) 0px 2px 6px 2px",
  },
});

export const ImageBGPlatforms = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0.22;
  transition: all ease-in-out 0.3s;
  :hover {
    opacity: 0.9;
  }
`;

export const PlatformsTitle = styled(Typography)`
  && {
    font-size: 14px;
    font-family: "Chivo Mono", sans-serif;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 0 #000;
    font-weight: bold;
    color: white;
    text-align: center;
    position: absolute;
    pointer-events: none;
  }
`;

// Detail Platform
export const BoxContainerPlatform = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const PlatformNameText = styled(Typography)`
  && {
    font-family: "Chivo Mono", sans-serif;
    font-weight: bold;
    font-size: 36px;
  }
`;

export const PlatformGameBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 10,
});

export const BoxGamePlatform = styled(Box)({
  padding: 18,
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  flexDirection: "column",
  transition: "all ease-in-out 0.4s",
  ":hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 0px 8px 1px rgba(41, 182, 246, 1) inset",
  },
});
