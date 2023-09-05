import React from 'react';

const LoadingState = ({ loadingText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '0.625rem 1.25rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        borderRadius: '0.375rem',
        background: '#F0F0F0',
        color: '#ABABAB',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        border: 'none',
        outline: 'none',
        position: 'relative',
        border: 'none',
        outline: 'none',
    };

    const loaderContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const loaderStyle = {
        width: '14px', // Personalizzabile
        height: '14px', // Personalizzabile
        border: '2px solid #ABABAB',
        borderTop: '2px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite', // Animazione del loader
    };

    return (
        <button style={buttonStyle} disabled>
            <div style={loaderContainerStyle}>
                <div style={loaderStyle}></div>
                <span style={{ marginTop: '0.25rem' }}>{loadingText}</span>
            </div>
        </button>
    );
};

export default LoadingState;
