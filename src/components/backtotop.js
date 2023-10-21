import { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = currentScrollPos > 100;
            setIsVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            id="back-to-top"
            onClick={handleClick}
            style={{
                display: isVisible ? 'block' : 'none',
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '99',
                backgroundColor: 'green',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                textAlign: 'center',
                fontSize: '1.5rem',
                cursor: 'pointer',
            }}
        >
            &#8593;
        </button>
    );
};

export default BackToTopButton;