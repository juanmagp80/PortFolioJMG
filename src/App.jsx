import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/index.jsx";
import HorizontalCard from "./Components/Card/index.jsx";
import HorizontalCard2 from "./Components/Card2/index.jsx";
import HorizontalCard3 from "./Components/Card3/index.jsx";
import HorizontalCard4 from "./Components/Card4/index.jsx";
import Footer from "./Components/Footer/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App bg-indigo-500 min-h-screen">
        <Header />
        <HorizontalCard />
        <HorizontalCard2 />
        <HorizontalCard3 />
        <HorizontalCard4 />
        <Footer />
      </div>
    </>
  );
}

export default App;
