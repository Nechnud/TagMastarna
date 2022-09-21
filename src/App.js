import React from "react";
import Footer from "./components/Footer";
import RouteProvider from "./RouteProvider";
function App() {
  return (
    <div className="appContainer">
      <RouteProvider>
        <Footer />
      </RouteProvider>
    </div>
  );
}

export default App;
