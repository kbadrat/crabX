import logo from "/logo.svg"
import crab from "/crab2.png"

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about__inner">
                    <div className="about__main">
                        <div className="title">
                            <h1>About</h1>
                            <img src={logo} alt="Logo" />
                        </div>

                        <p>CRABX is more than just a meme coin—it's a vibrant community-driven project built on creativity, collaboration, and innovation. Inspired by the resilience and determination of crabs, CRABX combines humor and utility to create a unique space in the crypto world.</p>

                        <p>
                            With a mission to empower its holders, CRABX offers exciting opportunities, from exclusive rewards to upcoming utilities that make it more than just a meme. Whether you're here for the laughs, the community, or the long-term potential, CRABX is your ticket to a fun and rewarding crypto experience.
                        </p>
                        <p>Join us and be part of a project that's clawing its way to the top! 🦀🚀</p>
                    </div>
                    <div className="main__crab">
                        <div className="main__crab-halo"></div>
                        <img src={crab} alt="Crab" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;