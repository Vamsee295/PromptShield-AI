'use client';

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const variantStyles = {
    primary: 'bg-black hover:bg-black text-white font-bold border-gray-800 shadow-sm',
    secondary: 'bg-black dark:bg-slate-700 hover:bg-black dark:hover:bg-slate-600 text-white dark:text-white border-gray-800 dark:border-dark-border',
    danger: 'bg-red-500 hover:bg-red-600 text-white border-transparent',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-slate-700 text-white dark:text-gray-300 border-transparent',
};

const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
};

export default function Button({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    children,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
        inline-flex items-center justify-center gap-2 font-bold rounded-lg border transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
