import React, { useEffect, useRef, useState } from 'react';

const InstructionCard = ({ step, title, description }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const card = cardRef.current;
        if (card) {
            observer.observe(card);
        }

        return () => {
            if (card) {
                observer.unobserve(card);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`instruction-card ${isVisible ? 'animate' : ''}`}
        >
            <p className="instruction-card__step">{step}</p>
            <div className="instruction-card__text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InstructionCard;
