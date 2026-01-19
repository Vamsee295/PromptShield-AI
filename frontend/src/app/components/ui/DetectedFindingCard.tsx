'use client';

import { DetectedFindingCardProps } from '../types';

/**
 * Individual detected finding card component
 * Displays type, description, and risk level for each detected secret
 */
export default function DetectedFindingCard({ finding }: DetectedFindingCardProps) {
    const riskColors = {
        HIGH: {
            bg: 'bg-red-950',
            border: 'border-red-900',
            text: 'text-red-400',
            badge: 'bg-red-900 text-red-300',
            icon: '🔴',
        },
        MEDIUM: {
            bg: 'bg-yellow-950',
            border: 'border-yellow-900',
            text: 'text-yellow-400',
            badge: 'bg-yellow-900 text-yellow-300',
            icon: '🟡',
        },
        LOW: {
            bg: 'bg-green-950',
            border: 'border-green-900',
            text: 'text-green-400',
            badge: 'bg-green-900 text-green-300',
            icon: '🟢',
        },
    };

    const colors = riskColors[finding.riskLevel];

    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors.bg} ${colors.border} mb-3`}>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{colors.icon}</span>
                        <h4 className="font-black text-white">{finding.type}</h4>
                    </div>
                    <p className="text-sm text-gray-300 font-bold ml-7">{finding.description}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-black ${colors.badge} ml-2`}>
                    {finding.riskLevel}
                </span>
            </div>
        </div>
    );
}
