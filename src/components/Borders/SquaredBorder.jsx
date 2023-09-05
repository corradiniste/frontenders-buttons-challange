import React from 'react';

const SquaredBorder = ({ buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '0.75rem 1.375rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        background: '#F0F0F0',
        border: 'none',
        outline: 'none',
    };

    const textStyle = {
        color: '#1C1A1A',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '0.75rem',
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

export default SquaredBorder;
