'use client';

import { RiskBadgeProps } from '../types';

/**
 * Color-coded risk level badge component
 * Displays risk severity with appropriate colors
 */
export default function RiskBadge({ level }: RiskBadgeProps) {
    const styles = {
        HIGH: 'bg-red-100 text-red-700 border-red-300',
        MEDIUM: 'bg-yellow-100 text-yellow-700 border-yellow-300',
        LOW: 'bg-green-100 text-green-700 border-green-300',
        SAFE: 'bg-green-100 text-green-700 border-green-300',
    };

    const labels = {
        HIGH: '⚠️ Risks Detected',
        MEDIUM: '⚠️ Risks Detected',
        LOW: '⚠️ Risks Detected',
        SAFE: '✓ Safe',
    };

    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${styles[level]}`}
        >
            {labels[level]}
        </span>
    );
}
