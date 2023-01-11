import AllRoute from "./routes/AllRoute";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Deliver from "./pages/Deliver";
const App = () => {
  return (
    <div>
         <BrowserRouter>
            <AllRoute />
         </BrowserRouter>
         <Deliver /> 
         <Footer />
         
    </div>
  );
};

export default App;
