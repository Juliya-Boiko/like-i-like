import { SharedLayout } from "layouts/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Portfolio } from "pages/Portfolio";
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";

export const App = () => {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
