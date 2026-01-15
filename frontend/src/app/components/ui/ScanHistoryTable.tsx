'use client';

import { ScanHistoryTableProps } from '../types';

/**
 * Scan history table component
 * Displays recent scan history with findings and risk levels
 */
export default function ScanHistoryTable({ history }: ScanHistoryTableProps) {
    const getRiskColor = (level: string) => {
        switch (level) {
            case 'HIGH':
                return 'text-red-600 font-semibold';
            case 'MEDIUM':
                return 'text-yellow-600 font-semibold';
            case 'LOW':
                return 'text-green-600 font-semibold';
            case 'SAFE':
                return 'text-green-600 font-semibold';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-900">Recent Scan History</h3>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View All Logs →
                </a>
            </div>

            {/* Security notice */}
            <div className="mb-4 flex items-center gap-2 text-xs text-gray-500 bg-green-50 px-3 py-2 rounded-md border border-green-200">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No raw prompts or secrets are stored
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Timestamp
                            </th>
                            <th className="text-left py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Prompt Snippet
                            </th>
                            <th className="text-left py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Findings
                            </th>
                            <th className="text-left py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Risk Level
                            </th>
                            <th className="text-left py-3 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-8 text-gray-500">
                                    No scan history yet. Start by scanning a prompt above.
                                </td>
                            </tr>
                        ) : (
                            history.map((entry) => (
                                <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="py-3 px-3 text-sm text-gray-600">
                                        {new Date(entry.timestamp).toLocaleString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </td>
                                    <td className="py-3 px-3 text-sm text-gray-900 max-w-xs truncate">
                                        {entry.promptSnippet}
                                    </td>
                                    <td className="py-3 px-3">
                                        <div className="flex flex-wrap gap-1">
                                            {entry.findings.length === 0 ? (
                                                <span className="text-xs text-gray-500 italic">No sensitive data found</span>
                                            ) : (
                                                entry.findings.map((finding, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-md font-medium"
                                                    >
                                                        {finding}
                                                    </span>
                                                ))
                                            )}
                                        </div>
                                    </td>
                                    <td className={`py-3 px-3 text-sm ${getRiskColor(entry.riskLevel)}`}>
                                        <div className="flex items-center gap-1">
                                            {entry.riskLevel === 'HIGH' && '🔴'}
                                            {entry.riskLevel === 'MEDIUM' && '🟡'}
                                            {(entry.riskLevel === 'LOW' || entry.riskLevel === 'SAFE') && '🟢'}
                                            {entry.riskLevel}
                                        </div>
                                    </td>
                                    <td className="py-3 px-3">
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
