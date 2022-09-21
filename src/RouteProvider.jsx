import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomeButton from "./components/HomeButton";
import TicketButton from "./components/TicketButton";
import LoggInbutton from "./components/LoggInbutton";
import TrafficInformationButton from "./components/TrafficInformationButton";
import MoreOptionsButton from "./components/MoreOptionsButton";
import Footer from "./components/Footer";
const RouteProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes for footer buttons */}
        <Route element={<Footer />} />
        <Route path="/" element={<HomeButton />} />
        <Route path="/ticket" element={<TicketButton />} />
        <Route path="/loggIn" element={<LoggInbutton />} />
        <Route path="/information" element={<TrafficInformationButton />} />
        <Route path="/options" element={<MoreOptionsButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteProvider;
