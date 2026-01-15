'use client';

import { DetectedFindingCardProps } from '../types';

/**
 * Individual detected finding card component
 * Displays type, description, and risk level for each detected secret
 */
export default function DetectedFindingCard({ finding }: DetectedFindingCardProps) {
    const riskColors = {
        HIGH: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-700',
            badge: 'bg-red-100 text-red-700',
            icon: '🔴',
        },
        MEDIUM: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            text: 'text-yellow-700',
            badge: 'bg-yellow-100 text-yellow-700',
            icon: '🟡',
        },
        LOW: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-700',
            badge: 'bg-green-100 text-green-700',
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
                        <h4 className="font-semibold text-gray-900">{finding.type}</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">{finding.description}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-bold ${colors.badge} ml-2`}>
                    {finding.riskLevel}
                </span>
            </div>
        </div>
    );
}
