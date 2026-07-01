import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import KeepsakeShelf from "../components/KeepsakeShelf";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <KeepsakeShelf />
    </>
  );
}

export default Home;