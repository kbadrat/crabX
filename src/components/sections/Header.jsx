import logo from "/logo.svg"
import Button from "../Button";

const Header = () => {
    return (
        <header >
            <div className="container">
                <div className="header__inner">

                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>

                    <nav>
                        <a href="#home">home</a>
                        <a href="#about">about</a>
                        <a href="#how-to-buy">how to buy</a>
                        <a href="#tokenomics">tokenomics</a>
                        <a href="#roadmap">roadmap</a>
                    </nav>

                    <Button text="Buy now" href="https://www.google.com/" />
                </div>
            </div>
        </header>
    );
}

export default Header;