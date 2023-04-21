import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ExerciseDetail from "./pages/ExerciseDetail/ExerciseDetail";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Exercises from "./pages/Exersices/Exercises";
import Services from "./pages/Services/Services";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="exercises" element={<Exercises />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="exercise/:id" element={<ExerciseDetail />}></Route>
        <Route path="services" element={<Services />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
