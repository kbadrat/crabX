const Button = ({ text, href }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <button>
                {text}
            </button>
        </a>
    );
}

export default Button;
