/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from "./components/footer";
import BackToTopButton from "./components/backtotop";
import NavBar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Footer/>
      <BackToTopButton />
    </div>
  );
}

