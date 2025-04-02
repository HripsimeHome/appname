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
      <div className="container wrapper">
        <AppRouter />
      {/*}  <div className="linePosition"> 
          <span className="line"></span>
        </div>   */}    
      </div>
    
      <Footer />      

    </>
  );
}

export default App;
