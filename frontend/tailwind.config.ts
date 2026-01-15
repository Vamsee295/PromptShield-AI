import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Light mode colors
                background: '#F5F7FA',
                card: '#FFFFFF',
                border: '#E5E7EB',

                // Dark mode colors
                'dark-bg': '#0F172A',
                'dark-card': '#1E293B',
                'dark-border': '#334155',

                // Brand colors
                primary: {
                    DEFAULT: '#2563EB',
                    hover: '#1D4ED8',
                    light: '#3B82F6',
                },

                // Status colors
                success: {
                    DEFAULT: '#10B981',
                    light: '#D1FAE5',
                    dark: '#065F46',
                },
                warning: {
                    DEFAULT: '#F59E0B',
                    light: '#FEF3C7',
                    dark: '#92400E',
                },
                danger: {
                    DEFAULT: '#EF4444',
                    light: '#FEE2E2',
                    dark: '#991B1B',
                },
                info: {
                    DEFAULT: '#3B82F6',
                    light: '#DBEAFE',
                    dark: '#1E40AF',
                },

                // Severity colors (matching Figma)
                critical: '#DC2626',
                high: '#F97316',
                medium: '#F59E0B',
                low: '#3B82F6',
                safe: '#10B981',
            },
            boxShadow: {
                'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            },
        },
    },
    plugins: [],
};

export default config;
