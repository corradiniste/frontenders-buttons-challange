import React from 'react';

const ColorStateOutlineInfo = ({ buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '0.75rem 1.375rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        borderRadius: '0.375rem',
        border: '1px solid #3498DB',
        background: '#F0F0F0',
        color: '#3498DB',
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

export default ColorStateOutlineInfo;
