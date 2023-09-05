import React from 'react';

const DisabledState = ({ buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '0.625rem 1.25rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        borderRadius: '0.375rem',
        background: '#F0F0F0',
        color: '#ABABAB', // Modificato il colore del testo
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        border: 'none',
        outline: 'none',
    };

    return (
        <button style={buttonStyle} disabled>
            {buttonText}
        </button>
    );
};

export default DisabledState;
