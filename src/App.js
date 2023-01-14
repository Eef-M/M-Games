import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from "@mui/material";
import { StyledTheme } from "./style/styles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Genres from "./pages/Genres";
import DetailGame from "./pages/DetailGame";
import Platforms from "./pages/Platforms"
import NotFound from "./pages/NotFound";
import GenresGames from "./pages/GenresGames";
import PlatformsGames from "./pages/PlatformsGames";

function App() {
  const [mode, setMode] = useState(true)
  const theme = StyledTheme(mode)

  const handleMode = () => {
    setMode(!mode)
  }

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container sx={{ padding: '20px 80px 80px 80px' }} maxWidth={false} disableGutters>
            <Navbar mode={mode} handle={handleMode} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/platforms" element={<Platforms />} />
              <Route path="/detail/:id" element={<DetailGame />} />
              <Route path="/genres_games/:id" element={<GenresGames />} />
              <Route path="/platforms_games/:id" element={<PlatformsGames />} />
              <Route path="/notfound" element={<NotFound />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </Router >
    </>
  );
}

export default App;
