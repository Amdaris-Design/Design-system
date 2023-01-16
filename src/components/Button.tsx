import React from 'react';

export type Props = {
    text: string;
    variant: 'primary' | 'secondary' | 'tertiary';
    size: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    disabled?: boolean;
};

const Button = ({ text, variant, size, onClick, disabled }: Props) => {
    let classes = '';
    if (variant === 'primary') {
        classes = ' bg-gray-800 rounded text-white font-normal hover:bg-gray-700 focus:shadow-outline';
    } else if (variant === 'secondary') {
        classes = ' flex bg-gray-100 rounded text-gray-800 font-normal border-gray-800 border-2 hover:bg-gray-200  focus:shadow-outline';
    } else if (variant === 'tertiary') {
        classes = 'rounded text-black font-normal hover:bg-gray-200 focus:shadow-outline';
    }
    if (size === 'sm') {
        classes += ' py-2 px-4 text-xs';
    } else if (size === 'md') {
        classes += ' py-2 px-4 text-md';
    } else if (size === 'lg') {
        classes += ' py-2 px-4 text-lg';
    
    }

    // tailwindcss transform hover:scale-105 transition duration-300 ease-in-out
    if (disabled) {
        classes += ' opacity-50 cursor-not-allowed';
    }
    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;


