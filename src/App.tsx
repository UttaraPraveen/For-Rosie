import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Letters from "./pages/Letters";
import LittleThings from "./pages/LittleThings";
import Reasons from "./pages/Reasons";
import Constellation from "./pages/Constellation";
import OpenWhen from "./pages/OpenWhen";
import Encouragement from "./pages/Encouragement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/letters" element={<Letters />} />

      <Route
        path="/little-things"
        element={<LittleThings />}
      />

      <Route
        path="/reasons"
        element={<Reasons />}
      />

      <Route
        path="/constellation"
        element={<Constellation />}
      />

      <Route
        path="/open-when"
        element={<OpenWhen />}
      />

      <Route
        path="/encouragement"
        element={<Encouragement />}
      />
    </Routes>
  );
}

export default App;