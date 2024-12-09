import crab from "/crab1.png";
import bigLogo from "/bigLogo.svg";
import Button from "../Button";
import div from "/div1.svg";

const TopSection = () => {
    return (

        <section className="top" id="home">
            <div className="container">
                <div className="top__inner">
                    <div className="top__crab">
                        <div className="top__crab-halo"></div>
                        <img src={crab} alt="Crab" />
                    </div>
                    <div className="top__main">
                        <div className="top__description">
                            <img src={bigLogo} alt="big logo" />
                            <p>
                                The ultimate meme coin bringing fun, community, and unstoppable
                                energy to the crypto space. Join the crab revolution and ride
                                the wave to the moon!
                            </p>
                        </div>
                        <Button text="Join Presale" href="https://www.google.com/" />
                    </div>
                </div>
            </div>

            <img className="divider1" src={div} alt="" />

        </section>

    );
};

export default TopSection;
