import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const IconLeftButton = ({ rightText, buttonText }) => {
    const buttonStyle = {
        display: 'flex',
        padding: '0.625rem 1.25rem 0.625rem 0.875rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.875rem',
        borderRadius: '0.375rem',
        background: '#2BBC9D',
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
            <FontAwesomeIcon icon={faUser} style={{ color: '#ffffff' }} />
            {buttonText}
        </button>
    );
};

export default IconLeftButton;

