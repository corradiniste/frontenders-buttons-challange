import React from 'react';

const ColorStateWarning = ({ buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '0.75rem 1.375rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        borderRadius: '0.375rem',
        background: '#F49D10',
        border: 'none',
        outline: 'none',
        color: '#FFF', // Aggiunto il colore del testo
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    };

    return (
        <button style={buttonStyle}>
            {buttonText}
        </button>
    );
};

export default ColorStateWarning;
