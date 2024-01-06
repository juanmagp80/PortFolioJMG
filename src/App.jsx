import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Header from "./Components/Header/index.jsx";
import HorizontalCard from "./Components/Card/index.jsx";
import HorizontalCard2 from "./Components/Card2/index.jsx";
import HorizontalCard3 from "./Components/Card3/index.jsx";
import HorizontalCard4 from "./Components/Card4/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import CardBio from "./Components/CardBio/index.jsx";

function App() {
  const [count, setCount] = useState(0);
  const formRef = useRef(null);
  const sobremiRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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
      <CSSTransition
        in={loading}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
          <img className="w-72 h-72" src={"./waving.png"} alt="logo" />
          <p className="text-white text-3xl font-poppins">¡Hola! Soy Juanma</p>
        </div>
      </CSSTransition>
      {!loading && (
        <div className="App bg-indigo-500 pt-2 min-h-screen">
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
      )}
    </>
  );
}

export default App;
