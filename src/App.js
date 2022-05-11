
import './App.css';
import Home from './components/Home/Home';
import { Routes, Route, } from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails';


function App() {
  return (
    <>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
    
        
      </Routes>

  
    </>
   
  );
}

export default App;
