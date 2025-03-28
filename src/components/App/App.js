import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "./../../router/AppRouter";
import { scrollTop } from "../../utils/scrollTop";
import Footer from "../global/Footer/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    scrollTop();
  }, [location]);

  return (
    <>
      <div className="container">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
