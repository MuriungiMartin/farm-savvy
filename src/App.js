/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from "./footer";
import BackToTopButton from "./backtotop";
import NavBar from "./Navbar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Footer/>
      <BackToTopButton />
    </div>
  );
}

