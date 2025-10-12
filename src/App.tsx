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
import InitaiteCall from "./pages/InitaiteCall";
import CallStart from "./pages/CallStart";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar should stay visible across all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inbound" element={<Inbound />} />
        <Route path="/initiate-call" element={<InitaiteCall />} />
        <Route path="/initiate-call" element={<InitaiteCall />} />
        <Route path="/call-status" element={<CallStart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
