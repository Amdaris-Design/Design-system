import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';

export interface Props {
    text: string;
    variant: 'primary' | 'secondary' | 'tertiary';
    size: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    disabled?: boolean;
    showIcon?: boolean;
}

const Button = ({ text, variant, size, onClick, disabled, showIcon = false }: Props) => {
    let classes = '';
    if (variant === 'primary') {
        classes = 'flex justify-center items-center gap-3  bg-gray-800 rounded text-white font-normal hover:bg-gray-700 focus:shadow-outline';
    } else if (variant === 'secondary') {
        classes = ' flex justify-center items-center gap-3 bg-gray-100 rounded text-gray-800 font-normal border-gray-800 border-2 hover:bg-gray-200  focus:shadow-outline';
    } else if (variant === 'tertiary') {
        classes = 'flex justify-center items-center gap-3 rounded text-black font-normal hover:bg-gray-200 focus:shadow-outline';
    }
    if (size === 'sm') {
        classes += ' py-2 px-3 text-xs';
    } else if (size === 'md') {
        classes += ' py-2 px-3 text-md';
    } else if (size === 'lg') {
        classes += ' py-2 px-3 text-lg';
    }

    if (disabled) {
        classes += ' opacity-50 cursor-not-allowed';
    }
    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {showIcon && <AddIcon  />} {text}
        </button>
    );
};

export default Button;

