import logo from "/logo.svg"
import telegram from "/telegram.svg"
import discord from "/discord.svg"
import x from "/x.svg"



const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__inner">
                    <img src={logo} alt="Logo" />

                    <nav className="footer__nav">
                        <a href="#home">home</a>
                        <a href="#about">about</a>
                        <a href="#how-to-buy">how to buy</a>
                        <a href="#tokenomics">tokenomics</a>
                        <a href="#roadmap">roadmap</a>
                    </nav>

                    <div className="footer__text">
                        <p>CRABX is a community-driven project bringing fun, innovation, and engagement to the crypto world.</p>
                        <p>© 2024 CRABX. All Rights Reserved.</p>
                    </div>

                    <div className="footer_links">
                        <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                            <img src={telegram} alt="Telegram" />
                        </a>
                        <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">
                            <img src={discord} alt="Discord" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src={x} alt="Twitter (X)" />
                        </a>
                    </div>
                </div>
            </div>
            <p></p>
        </div>
    );
}

export default Footer;