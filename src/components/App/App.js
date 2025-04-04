import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "./../../router/AppRouter";
import { scrollTop } from "../../utils/scrollTop";
import Footer from "../global/Footer/Footer";

import {
  homePagePath,
  aboutPagePath,
  audiencePagePath,
  registrationPagePath,
  categoriesPagePath
} from "../../router/path";

function App() {
  const location = useLocation();

  useEffect(() => {
    scrollTop();
  }, [location]);

  const hideFooter = [
    homePagePath,
    aboutPagePath,
    audiencePagePath,
    registrationPagePath,
    categoriesPagePath
  ].includes(location.pathname);

  return (
    <>
      <div className="container wrapper">
        <AppRouter />
      </div>

      {!hideFooter && <Footer />}
    </>
  );
}

export default App;