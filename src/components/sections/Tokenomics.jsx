import React, { useEffect, useRef, useState } from 'react';
import logo from "/logo.svg";
import tokenomics from "/tokenomics.svg";
import TokenomicsCard from "../TokenomicsCard";

const Tokenomics = () => {
    const graphRef = useRef(null);
    const [isGraphVisible, setIsGraphVisible] = useState(false);
    const [isCardsVisible, setIsCardsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === graphRef.current) {
                        setIsGraphVisible(true);
                        setIsCardsVisible(true);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        const graphElement = graphRef.current;

        if (graphElement) observer.observe(graphElement);

        return () => {
            if (graphElement) observer.unobserve(graphElement);
        };
    }, []);

    return (
        <section className="tokenomics" id="tokenomics">
            <div className="container">
                <div className="tokenomics__inner">
                    <div className="tokenomics__total">
                        <div className="tokenomics__total-title">
                            <h1 className="title">Tokenomics</h1>
                            <div className="tokenomics__total-text">
                                <span>Total</span>
                                <img src={logo} alt="logo" />
                                <span>supply:</span>
                                <span className="tokenomics__total-value">420 690 000 000 000</span>
                            </div>
                        </div>
                        <div
                            ref={graphRef}
                            className={`tokenomics__total-graph ${isGraphVisible ? 'rotate' : ''}`}
                        >
                            <img src={tokenomics} alt="graph" />
                        </div>
                    </div>
                    <div

                        className={`tokenomics__cards ${isCardsVisible ? 'visible' : ''}`}
                    >
                        <TokenomicsCard color="#3B82F6" title="Ecosystem Development (30%)" value="126,207,000,000,000" description="This allocation is reserved for long-term project growth, partnerships, integrations, and platform development. These tokens will be strategically used to incentivize ecosystem contributors, developers, and partners." />

                        <TokenomicsCard color="#EF4444" title="Community Rewards (25%)" value="105,172,500,000,000" description="Designed to engage and reward the community through initiatives like staking rewards, airdrops, contests, and loyalty programs. This ensures active participation and strengthens the user base." />

                        <TokenomicsCard color="#FFB95A" title="Team and Founders (15%)" value="63,103,500,000,000" description="A share allocated to the team and founders to incentivize their commitment and contributions to the project. These tokens will typically be vested over several years to ensure long-term alignment with the project's success." />

                        <TokenomicsCard color="#84CC16" title="Marketing and Growth (20%)" value="84,138,000,000,000" description="Focused on building awareness and adoption through marketing campaigns, advertising, influencer collaborations, and events. This helps drive the project's visibility and onboarding of new users." />

                        <TokenomicsCard color="#22C55E" title="Liquidity and Reserves (10%)" value="42,069,000,000,000" description="Dedicated to ensuring sufficient liquidity on decentralized and centralized exchanges, as well as maintaining reserves for unforeseen circumstances. This ensures smooth trading and operational stability." />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tokenomics;
