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
import CardBio from "./Components/CardBio/index.jsx";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const formRef = useRef(null);
  const sobremiRef = useRef(null);

  const handleContactClick = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleSobreMiClick = () => {
    sobremiRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div className="App bg-indigo-500 min-h-screen">
        <Header
          handleContactClick={handleContactClick}
          handleSobreMiClick={handleSobreMiClick}
        />
        <HorizontalCard />
        <HorizontalCard2 sobremiRef={sobremiRef} />
        <HorizontalCard3 />
        <HorizontalCard4 formRef={formRef} />
        <CardBio />
        <Footer />
      </div>
    </>
  );
}

export default App;
