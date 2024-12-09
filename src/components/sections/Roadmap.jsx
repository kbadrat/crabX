import { useEffect } from "react";
import logo from "/logo.svg";

const Roadmap = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const phases = document.querySelectorAll(".roadmap__phase");
        phases.forEach(phase => observer.observe(phase));

        return () => {
            phases.forEach(phase => observer.unobserve(phase));
        };
    }, []);

    return (
        <section className="roadmap" id="roadmap">
            <div className="container">
                <div className="roadmap__inner">
                    <div className="title">
                        <h1>Roadmap</h1>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="roadmap__phase roadmap__phase--1">
                        <h3 className="roadmap__title-first">Phase 1: Launch (Q1 2024)</h3>
                        <ul className="roadmap__phase-list">
                            <li>Token Deployment: Launch CRABX on the blockchain.</li>
                            <li>Community Kickoff: Build initial social media presence and engage early supporters.</li>
                            <li>Website Launch: Publish a fun and interactive website showcasing CRABX.</li>
                            <li>DEX Listing: Make CRABX available on key decentralized exchanges.</li>
                        </ul>
                    </div>

                    <div className="roadmap__phase roadmap__phase--2">
                        <h3 className="roadmap__title">Phase 2: Growth (Q2 2024)</h3>
                        <ul className="roadmap__phase-list">
                            <li>Marketing Campaigns: Roll out viral CRABX-themed meme challenges.</li>
                            <li>Community Rewards: Start staking and airdrop programs to reward CRABX holders.</li>
                            <li>NFT Collection: Release CRABX-themed NFTs with exclusive benefits. </li>
                        </ul>
                    </div>

                    <div className="roadmap__phase roadmap__phase--3">
                        <h3 className="roadmap__title">Phase 3: Expansion (Q3 2024)</h3>
                        <ul className="roadmap__phase-list">
                            <li>CEX Listings: List CRABX on mid-tier centralized exchanges.</li>
                            <li>Play-to-Earn Game: Launch the first CRABX mini-game to drive engagement.</li>
                            <li>DeFi Integration: Partner with platforms to include CRABX in liquidity pools and farms.</li>
                        </ul>
                    </div>

                    <div className="roadmap__phase roadmap__phase--4">
                        <h3 className="roadmap__title">Phase 4: Sustainability (Q4 2024)</h3>
                        <ul className="roadmap__phase-list">
                            <li>Charity Initiatives: Fund campaigns for marine life and ocean cleanup.</li>
                            <li>Marketplace Launch: Introduce a CRABX marketplace for trading NFTs and other goods.</li>
                            <li>Metaverse Integration: Begin exploring CRABX use cases in metaverse platforms.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Roadmap;
