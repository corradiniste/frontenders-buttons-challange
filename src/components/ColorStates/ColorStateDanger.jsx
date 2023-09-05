import React from 'react';

const ColorStateDanger = ({ buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '0.75rem 1.375rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        borderRadius: '0.375rem',
        background: '#E74C3C',
        border: 'none',
        outline: 'none',
        color: '#FFF',
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

export default ColorStateDanger;
