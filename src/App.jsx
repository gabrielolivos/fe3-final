
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>

            <Route path='/home' element={<div></div>}/>
            <Route path='/dentist/:id' element={<div></div>} />
            <Route path='/contacto' element={<Contact/>} />
            <Route path='/favs' element={<div></div>} />

          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
