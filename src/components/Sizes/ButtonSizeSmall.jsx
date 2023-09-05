import React from 'react';

const ButtonSizeSmall = ({ buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        height: '1.875rem',
        padding: '0.625rem 1.25rem',
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
        fontSize: '0.625rem',
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

export default ButtonSizeSmall;
