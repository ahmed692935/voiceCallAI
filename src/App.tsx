// import LandingPage from "./pages/LandingPage";

// function App() {
//   return (
//     <>
//       <div>
//         <LandingPage/>
//       </div>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // make sure the path is correct
import Inbound from "./pages/Inbound";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar should stay visible across all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inbound" element={<Inbound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
