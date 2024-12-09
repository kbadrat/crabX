import logo from "/logo-white.svg"

const TokenomicsCard = ({ color, title, value, description }) => {
    return (
        <div className="tokenomics-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="25" fill={color} />
            </svg>
            <div className="tokenomics-card__text">
                <div className="tokenomics-card__title">
                    <h2>{title}</h2>
                    <div className="tokenomics-card__value">
                        <span>{value}</span>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default TokenomicsCard;