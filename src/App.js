import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screen/Home/Home";
import Webpage from "./Screen/Webpage/Webpage";
import Login from "./L&SMOdal/Login";
import Signin from "./L&SMOdal/Signin";
import MoviesDetails from "./Screen/MoviesDetails/MoviesDetails";
import PageNotFound from "./Screen/PageNotFound/PageNotFound";

function App() {
 
  // if (user === null) {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route exact path="/" element={<Navbar />} />
  //         <Route exact path="/home" element={<Navbar />} />
  //         <Route exact path="/moviedetails" element={<Navbar />} />
  //         <Route exact path="/pagenotfound" element={<Navbar />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/signin" element={<Signin />} />
  //       </Routes>
  //       <Routes>
  //         <Route exact path="/" element={<Webpage />} />
  //         <Route path="/home" element={<Home />} />
  //         <Route path="/moviedetails" element={<MoviesDetails />} />
  //         <Route path="/pagenotfound" element={<PageNotFound />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }
  return (
    <>
      {/* <button onClick={() => signOut(auth)}>logout</button> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/home" element={<Navbar />} />
          <Route exact path="/moviedetails" element={<Navbar />} />
          <Route exact path="/pagenotfound" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Webpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/moviedetails" element={<MoviesDetails />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
