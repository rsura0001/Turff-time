import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Book from "./components/Book";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Registration from "./components/Registration";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        {/* <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Roadmap />
        <Footer /> */}



        {/* <SignIn/> */}
          {/* <Registration/> */}


        {/* <Book/> */}
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
