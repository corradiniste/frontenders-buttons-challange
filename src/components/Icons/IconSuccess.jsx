import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"; // Importa l'icona di successo

const IconSuccess = () => {
    const buttonStyle = {
        display: 'flex',
        width: '3.5rem',
        height: '2.4375rem',
        padding: '0.625rem 1.25rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        borderRadius: '1.25rem',
        background: '#30CC71',
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
        flex: '1 0 0',
        alignSelf: 'stretch',
    };

    return (
        <button style={buttonStyle}>
            <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
        </button>
    );
};

export default IconSuccess;
