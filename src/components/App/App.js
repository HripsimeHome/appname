import { Link } from "react-router-dom"
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
  categoriesPagePath,
  searchPagePath
} from "../../router/path";

function App() {
  const location = useLocation();
  const isCategories = location.pathname === categoriesPagePath;

  useEffect(() => {
    scrollTop();
  }, [location]);

  const nextStepMap = {
    [homePagePath]: aboutPagePath,
    [aboutPagePath]: audiencePagePath,
    [audiencePagePath]: registrationPagePath,
    [registrationPagePath]: categoriesPagePath,
    [categoriesPagePath]: searchPagePath,
  };  
  
  const nextPagePath = nextStepMap[location.pathname];

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

        {nextPagePath && (
          <div className={`container btnNextPageContainer ${isCategories ? 'btnNextPageFixedContainer' : ''}`}>            
            <Link 
              to={nextPagePath} 
              className="btnNextPage">
              Далее
            </Link>
          </div>
        )}     
      </div>

      {!hideFooter && <Footer />}
    </>
  );
}

export default App;