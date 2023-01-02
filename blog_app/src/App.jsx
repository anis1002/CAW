import Home from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./Contacts";
import Blog from "./Blog";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>

    
 
  );
}

export default App;
