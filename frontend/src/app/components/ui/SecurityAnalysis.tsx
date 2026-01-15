'use client';

import { SecurityAnalysisProps, DetectedFinding } from '../types';
import RiskBadge from './RiskBadge';
import DetectedFindingCard from './DetectedFindingCard';
import MaskedPreview from './MaskedPreview';

/**
 * Security Analysis panel component (right side)
 * Shows scan results, detected findings, and masked preview
 */
export default function SecurityAnalysis({ scanResult, isLoading }: SecurityAnalysisProps) {
    // Convert scan result to findings array
    const findings: DetectedFinding[] = scanResult
        ? scanResult.detectedTypes.map((type) => ({
            type: type.replace(/_/g, ' '),
            description: getDescription(type),
            riskLevel: scanResult.riskLevels[type],
        }))
        : [];

    const overallRisk = scanResult?.hasSensitiveData
        ? getHighestRisk(findings)
        : 'SAFE';

    const handleCopy = () => {
        if (scanResult?.maskedPrompt) {
            navigator.clipboard.writeText(scanResult.maskedPrompt);
        }
    };

    if (isLoading) {
        return (
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                        <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-gray-600 font-medium">Analyzing prompt...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!scanResult) {
        return (
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <h3 className="text-lg font-bold text-gray-900">Security Analysis</h3>
                    </div>
                </div>

                <div className="flex items-center justify-center h-64 text-center">
                    <div>
                        <div className="text-6xl mb-4">🛡️</div>
                        <p className="text-gray-500">
                            Enter a prompt and click <span className="font-semibold">Scan Prompt</span> to analyze
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-900">Security Analysis</h3>
                </div>
                <RiskBadge level={overallRisk} />
            </div>

            {/* Detected Findings */}
            {scanResult.hasSensitiveData && (
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                        Detected Findings ({findings.length})
                    </h4>
                    <div>
                        {findings.map((finding, index) => (
                            <DetectedFindingCard key={index} finding={finding} />
                        ))}
                    </div>
                </div>
            )}

            {/* Masked Preview */}
            {scanResult.maskedPrompt && (
                <MaskedPreview maskedPrompt={scanResult.maskedPrompt} onCopy={handleCopy} />
            )}

            {/* Scan completion info */}
            <div className="mt-4 text-xs text-gray-400 text-center">
                Scan completed • No raw prompts or secrets are stored
            </div>
        </div>
    );
}

// Helper functions
function getDescription(type: string): string {
    const descriptions: Record<string, string> = {
        API_KEY: 'Pattern match for OpenAI API key format',
        AWS_ACCESS_KEY: 'AWS access key identifier detected',
        EMAIL: 'Found personal email address',
        IP_ADDRESS: 'IP address detected in prompt',
        DB_PASSWORD: 'Potential database password found',
    };
    return descriptions[type] || 'Sensitive pattern detected';
}

function getHighestRisk(findings: DetectedFinding[]): 'HIGH' | 'MEDIUM' | 'LOW' {
    if (findings.some((f) => f.riskLevel === 'HIGH')) return 'HIGH';
    if (findings.some((f) => f.riskLevel === 'MEDIUM')) return 'MEDIUM';
    return 'LOW';
}
