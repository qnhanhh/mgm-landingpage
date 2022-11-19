import React from "react";
import Introduction from "./components/introduction";
import TopBanner from "./components/top-banner";
import TopNav from "./components/top-nav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <TopBanner />
      <Introduction />
    </div>
  );
}

export default App;
