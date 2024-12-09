import logo from "/logo.svg"
import InstructionCard from "../InstructionCard";

const HowToBuy = () => {
    return (
        <section className="instruction" id="how-to-buy">
            <div className="container">
                <div className="instruction__inner">

                    <div className="title">
                        <h1>How to buy</h1>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="instruction__cards">
                        <InstructionCard step={1} title={"Set Up Your Wallet"} description="Download and install a crypto wallet like MetaMask or Trust Wallet. Make sure it's connected to the correct blockchain network (e.g., Binance Smart Chain or Ethereum, depending on CRABX's platform)." />
                        <InstructionCard step={2} title={"Add Funds to Your Wallet"} description="Purchase cryptocurrency like BNB or ETH on an exchange (e.g., Binance, Coinbase) and transfer it to your wallet. These funds will be used to swap for CRABX." />
                        <InstructionCard step={3} title={"Visit the CRABX Exchange"} description="Go to the official CRABX swap platform or a supported decentralized exchange (DEX). Connect your wallet securely by following the on-screen instructions." />
                        <InstructionCard step={4} title={"Swap for CRABX"} description="Enter the amount of cryptocurrency you want to trade for CRABX, confirm the transaction, and approve it in your wallet. Once completed, your CRABX tokens will appear in your wallet. Welcome to the crab family! 🦀" />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HowToBuy;