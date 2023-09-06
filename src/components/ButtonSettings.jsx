import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const MyButton = ({ size = "Normal", borders = "Normal", state = "Disabled", loadingText, children, backgroundColor = "Normal", border = "Normal", colorButtonText = "Black", iconLeft, iconRight, iconSuccess, buttonDisabled }) => {
    const colours = {
        Black: '#1C1A1A',
        Normal: '#F0F0F0',
        Primary: '#2BBC9D',
        Link: '#2981BA',
        Info: '#3498DB',
        Success: '#30CC71',
        Warning: '#F49D10',
        Danger: '#E74C3C',
    };

    const sizes = {
        Small: {
            display: 'flex',
            height: '1.875rem',
            padding: '0.625rem 1.25rem',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.625rem',
        },
        Normal: {
            display: 'flex',
            padding: '0.75rem 1.375rem',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.625rem',
        },
        Medium: {
            display: 'flex',
            padding: '0.875rem 1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.625rem',
        },
        Large: {
            display: 'flex',
            padding: '1rem 1.625rem',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.625rem',
        },
    };

    const borderStyles = {
        Normal: {
            borderRadius: '0.375rem',
        },
        Squared: {
            borderRadius: '0',
        },
        Rounded: {
            borderRadius: '1.25rem',
        },
    };

    const stateStyles = {
        Disabled: {
            color: colours.Normal,
            cursor: 'not-allowed',
        },
        Loading: {
            cursor: 'not-allowed',
        },
    };

    const typographyStyles = {
        Small: {
            fontSize: '0.625rem',
        },
        Normal: {
            fontSize: '0.75rem',
        },
        Medium: {
            fontSize: '0.875rem',
        },
        Large: {
            fontSize: '1rem',
        },
    };

    const buttonStyle = {
        ...sizes[size] || sizes.Normal,
        ...borderStyles[borders] || borderStyles.Normal,
        ...stateStyles[state] || {},
        background: colours[backgroundColor] || colours.Normal,
        border: `1px solid ${colours[border] || colours.Normal}`,
        color: colours[colorButtonText] || colours.Normal,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.625rem',
        position: 'relative',
    };

    const loaderContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const textStyle = {
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        color: buttonDisabled ? '#ABABAB' : colours[colorButtonText] || colours.Normal,
        ...typographyStyles[size] || {},
    };

    const [dots, setDots] = useState('');

    useEffect(() => {
        let intervalId;

        if (state === 'Loading') {
            intervalId = setInterval(() => {
                setDots((prevDots) => {
                    if (prevDots === '...') {
                        return '';
                    } else {
                        return prevDots + '.';
                    }
                });
            }, 500);
        } else {
            setDots('');
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [state]);

    return (
        <button style={buttonStyle} disabled={state === 'Disabled'}>
            {iconLeft && (
                <FontAwesomeIcon icon={faUser} style={{ color: '#ffffff', width: '0.9375rem', alignSelf: 'stretch' }} />
            )}
            {state === 'Loading' ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={textStyle}>{loadingText || 'LOADING'}{dots}</span>
                </div>
            ) : (
                <>
                    {iconSuccess ? (
                        <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff', width: '0.9375rem', alignSelf: 'stretch' }} />
                    ) : (
                        <span style={textStyle}>{children}</span>
                    )}
                </>
            )}
            {iconRight && (
                <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ffffff', width: '0.9375rem', alignSelf: 'stretch' }} />
            )}
        </button>
    );
};

export default MyButton;
