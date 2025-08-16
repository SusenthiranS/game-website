import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ROUTES } from "./routes";
import Layout from "./pages/Layout";
import SoloGames from "./pages/SoloGames";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DEFAULT} element={<Navigate to={ROUTES.HOME} />} />
        <Route
          path={ROUTES.HOME}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path={ROUTES.SINGLE_PLAYER_GAMES}
          element={
            <Layout>
              <SoloGames />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
