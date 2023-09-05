import React from 'react';

const ButtonSizeLarge = ({ buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '1rem 1.625rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        borderRadius: '0.375rem',
        background: '#F0F0F0',
        border: 'none',
        outline: 'none',
    };

    const textStyle = {
        color: '#1C1A1A',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    };

    return (
        <button style={buttonStyle}>
            <span style={textStyle}>{buttonText}</span>
        </button>
    );
};

export default ButtonSizeLarge;
