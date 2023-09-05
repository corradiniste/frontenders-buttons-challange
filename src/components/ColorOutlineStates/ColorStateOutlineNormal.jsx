import React from 'react';

const ColorStateOutlineNormal = ({ buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '0.625rem 1.25rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        borderRadius: '0.375rem',
        border: '1px solid #1C1A1A',
        background: '#F0F0F0',
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
            {buttonText}
        </button>
    );
};

export default ColorStateOutlineNormal;
