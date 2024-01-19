import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Textarea from "./components/Textarea";
import Stats from "./components/Stats";

function App() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });
  return (
    <>
      <Header />
      <Container>
        <Textarea setStats={setStats} />
        <Stats stats={stats} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
