'use client';

import { useState } from 'react';
import { ScanRequest, ScanResponse, ScanHistoryEntry, RiskLevel } from './types';
import PromptInput from './ui/PromptInput';
import SecurityAnalysis from './ui/SecurityAnalysis';
import ScanHistoryTable from './ui/ScanHistoryTable';
import SendToAIButton from './ui/SendToAIButton';

/**
 * Main Prompt Analyzer component
 * Orchestrates the entire scan and analysis flow
 */
export default function PromptAnalyzer() {
    const [promptText, setPromptText] = useState('');
    const [scanResult, setScanResult] = useState<ScanResponse | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [isSendingToAI, setIsSendingToAI] = useState(false);
    const [scanHistory, setScanHistory] = useState<ScanHistoryEntry[]>([
        // Mock data for demonstration
        {
            id: '1',
            timestamp: new Date(Date.now() - 3600000).toISOString(),
            promptSnippet: 'Can you help me analyze this...',
            findings: ['API Key', 'Email'],
            riskLevel: 'HIGH',
        },
        {
            id: '2',
            timestamp: new Date(Date.now() - 7200000).toISOString(),
            promptSnippet: 'Write a python function to...',
            findings: [],
            riskLevel: 'SAFE',
        },
        {
            id: '3',
            timestamp: new Date(Date.now() - 10800000).toISOString(),
            promptSnippet: 'Refactor this SQL query...',
            findings: ['IP Address'],
            riskLevel: 'MEDIUM',
        },
    ]);

    /**
     * Handle scan prompt action
     * Calls backend /api/scan endpoint
     */
    const handleScan = async () => {
        if (!promptText.trim()) return;

        setIsScanning(true);
        try {
            const request: ScanRequest = { prompt: promptText };

            // Call backend API
            const response = await fetch('/api/scan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
            });

            if (!response.ok) {
                throw new Error('Scan failed');
            }

            const data: ScanResponse = await response.json();
            setScanResult(data);

            // Add to history (only storing metadata, not raw prompt)
            const newEntry: ScanHistoryEntry = {
                id: Date.now().toString(),
                timestamp: new Date().toISOString(),
                promptSnippet: promptText.substring(0, 40) + (promptText.length > 40 ? '...' : ''),
                findings: data.detectedTypes.map((t) => t.replace(/_/g, ' ')),
                riskLevel: data.hasSensitiveData ? getHighestRisk(data.riskLevels) : 'SAFE',
            };

            setScanHistory([newEntry, ...scanHistory.slice(0, 9)]); // Keep last 10
        } catch (error) {
            console.error('Scan error:', error);
            alert('Failed to scan prompt. Please try again.');
        } finally {
            setIsScanning(false);
        }
    };

    /**
     * Handle send to AI action
     * Only sends MASKED prompt (never raw)
     */
    const handleSendToAI = async () => {
        if (!scanResult?.maskedPrompt) return;

        // User confirmation
        const confirmed = confirm(
            '⚠️ You are about to send the MASKED prompt to AI.\n\n' +
            'Original secrets will NOT be sent.\n\n' +
            'Do you want to proceed?'
        );

        if (!confirmed) return;

        setIsSendingToAI(true);
        try {
            // TODO: Implement actual AI API call here
            // For now, simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            alert('✅ Safe prompt sent successfully!\n\nOnly masked content was transmitted.');
        } catch (error) {
            console.error('Send to AI error:', error);
            alert('Failed to send prompt. Please try again.');
        } finally {
            setIsSendingToAI(false);
        }
    };

    return (
        <div className="min-h-screen bg-black py-8 px-4">
            {/* Header */}
            <header className="max-w-7xl mx-auto mb-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-black text-white">PromptShield</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-white hover:text-gray-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <button className="text-white hover:text-gray-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-2 bg-black border border-gray-800 px-3 py-2 rounded-lg">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">V</span>
                            </div>
                            <span className="text-sm font-bold text-white">Vamsee</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto">
                {/* Page Title */}
                <div className="mb-6">
                    <h2 className="text-3xl font-black text-white mb-2">Prompt Analyzer</h2>
                    <p className="text-gray-300 font-bold">
                        Scan your prompts for sensitive data before sending them to LLMs.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Left Panel - Prompt Input */}
                    <div className="bg-black rounded-xl border border-gray-800 p-6">
                        <PromptInput
                            value={promptText}
                            onChange={setPromptText}
                            onScan={handleScan}
                            isLoading={isScanning}
                        />

                        {/* Send to AI Button */}
                        <div className="mt-4 pt-4 border-t border-gray-800">
                            <SendToAIButton
                                disabled={!scanResult || isScanning}
                                onClick={handleSendToAI}
                                isLoading={isSendingToAI}
                            />
                            <p className="text-xs text-gray-400 font-bold mt-2">
                                💡 Only masked content will be sent to AI
                            </p>
                        </div>
                    </div>

                    {/* Right Panel - Security Analysis */}
                    <SecurityAnalysis scanResult={scanResult} isLoading={isScanning} />
                </div>

                {/* Bottom Section - Scan History */}
                <ScanHistoryTable history={scanHistory} />
            </main>
        </div>
    );
}

/**
 * Helper function to get highest risk level from scan results
 */
function getHighestRisk(riskLevels: Record<string, RiskLevel>): RiskLevel {
    const levels = Object.values(riskLevels);
    if (levels.includes('HIGH')) return 'HIGH';
    if (levels.includes('MEDIUM')) return 'MEDIUM';
    return 'LOW';
}
