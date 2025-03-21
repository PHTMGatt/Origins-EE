// src/router.tsx

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FireStaff from "./components/Staffs/jsx/FireStaff";
import IceStaff from "./components/Staffs/jsx/IceStaff";
import WindStaff from "./components/Staffs/jsx/WindStaff";
import LightningStaff from "./components/Staffs/jsx/LightningStaff";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/staffs/fire" element={<FireStaff />} />
      <Route path="/staffs/ice" element={<IceStaff />} />
      <Route path="/staffs/wind" element={<WindStaff />} />
      <Route path="/staffs/lightning" element={<LightningStaff />} />
    </Routes>
  );
};

export default AppRouter;
