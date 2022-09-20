import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomeButton from "./components/HomeButton";
import TicketButton from "./components/TicketButton";
import LoggInbutton from "./components/LoggInbutton";
import TrafficInformationButton from "./components/TrafficInformationButton";
import MoreOptionsButton from "./components/MoreOptionsButton";

const RouteProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes for footer buttons */}
        <Route path="/" element={<HomeButton />} />
        <Route path="/ticket" element={<TicketButton />} />
        <Route path="/start" element={<LoggInbutton />} />
        <Route path="/start" element={<TrafficInformationButton />} />
        <Route path="/start" element={<MoreOptionsButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteProvider;
