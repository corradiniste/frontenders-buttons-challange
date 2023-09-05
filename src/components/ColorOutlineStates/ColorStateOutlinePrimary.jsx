import React from 'react';

const ColorStateOutlinePrimary = ({ buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '0.625rem 1.25rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        borderRadius: '0.375rem',
        border: '1px solid #2BBC9D',
        background: '#F0F0F0',
        color: '#2BBC9D',
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

export default ColorStateOutlinePrimary;
