import { SharedLayout } from "layouts/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Portfolio } from "pages/Portfolio/Portfolio";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
};
