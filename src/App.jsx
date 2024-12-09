import About from "./components/sections/About"
import Footer from "./components/sections/Footer"
import Header from "./components/sections/Header"
import HowToBuy from "./components/sections/HowToBuy"
import Roadmap from "./components/sections/Roadmap"
import Tokenomics from "./components/sections/Tokenomics"
import TopSection from "./components/sections/TopSection"
import div1 from "/div1.svg";
import div2 from "/div2.svg"

function App() {

    return (
        <main className="main">
            <Header />
            <TopSection />
            <About />
            <img className="divider2" src={div2} alt="" />
            <HowToBuy />
            <Tokenomics />
            <img className="divider1" src={div1} alt="" />
            <Roadmap />
            <Footer />
        </main>
    )
}

export default App
