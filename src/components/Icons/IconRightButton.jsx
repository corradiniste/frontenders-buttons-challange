import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const IconRightButton = ({ rightText, buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '0.625rem 0.875rem 0.625rem 1.25rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.875rem',
        borderRadius: '0.375rem',
        background: '#3498DB',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        border: 'none',
        outline: 'none',
    };

    const iconStyle = {
        width: '0.9375rem',
        alignSelf: 'stretch',
    };

    return (
        <button style={buttonStyle}>
            <span>{buttonText}</span>
            <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ffffff' }} />
        </button>
    );
};

export default IconRightButton;
