'use client';

import { useState } from 'react';
import Badge from '@/app/components/shared/Badge';

export default function AlertsPage() {
    const [filterSeverity, setFilterSeverity] = useState('all');

    return (
        <div>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-white mb-2">Security Alerts & Incidents</h1>
                <p className="text-base font-semibold text-white">
                    Review and manage sensitive data detection events
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">24</p>
                    <p className="text-sm font-bold text-gray-300">Critical Incidents</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">189</p>
                    <p className="text-sm font-bold text-gray-300">Open Alerts</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">1,542</p>
                    <p className="text-sm font-bold text-gray-300">Resolved This Month</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">4.2m</p>
                    <p className="text-sm font-bold text-gray-300">Avg Response Time</p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-black border border-gray-800 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3">
                    <select
                        value={filterSeverity}
                        onChange={(e) => setFilterSeverity(e.target.value)}
                        className="px-4 py-2 border border-gray-800 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Severities</option>
                        <option value="critical">Critical</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                    </select>

                    <select className="px-4 py-2 border border-gray-800 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Status: All</option>
                        <option>Open</option>
                        <option>Under Investigation</option>
                        <option>Resolved</option>
                    </select>

                    <select className="px-4 py-2 border border-gray-800 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Type: All</option>
                        <option>PII Leak</option>
                        <option>API Key Exposure</option>
                        <option>Financial Data</option>
                    </select>

                    <div className="flex-1"></div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search incidents..."
                            className="w-64 pl-10 pr-4 py-2 border border-gray-800 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Incidents Table */}
            <div className="bg-black border border-gray-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-black border-b border-gray-800">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Incident ID</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Timestamp</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Severity</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">User</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Description</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {/* Row 1 - Critical */}
                            <tr className="hover:bg-black">
                                <td className="px-6 py-4">
                                    <code className="text-sm font-bold text-blue-600">INC-38942</code>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-semibold text-white">Jan 19, 2026</p>
                                    <p className="text-xs font-semibold text-gray-300">07:15:30 AM</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-white">AWS Secret Key</span>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant="critical" size="sm">CRITICAL</Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">AR</span>
                                        </div>
                                        <span className="text-sm font-bold text-white">Alex Rivera</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-semibold text-white">
                                        Attempted to share AWS access key in prompt to ChatGPT
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-black">
                                        BLOCKED
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 font-bold hover:underline text-sm">
                                        View Details
                                    </button>
                                </td>
                            </tr>

                            {/* Row 2 - High */}
                            <tr className="hover:bg-black">
                                <td className="px-6 py-4">
                                    <code className="text-sm font-bold text-blue-600">INC-38941</code>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-semibold text-white">Jan 19, 2026</p>
                                    <p className="text-xs font-semibold text-gray-300">06:42:18 AM</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-white">SSN Detected</span>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant="high" size="sm">HIGH</Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">SB</span>
                                        </div>
                                        <span className="text-sm font-bold text-white">Sarah Black</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-semibold text-white">
                                        Social Security Number found in customer support query
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-black">
                                        MASKED
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 font-bold hover:underline text-sm">
                                        View Details
                                    </button>
                                </td>
                            </tr>

                            {/* Row 3 - Medium */}
                            <tr className="hover:bg-black">
                                <td className="px-6 py-4">
                                    <code className="text-sm font-bold text-blue-600">INC-38940</code>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-semibold text-white">Jan 19, 2026</p>
                                    <p className="text-xs font-semibold text-gray-300">05:28:55 AM</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-white">Email Address</span>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant="medium" size="sm">MEDIUM</Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">MC</span>
                                        </div>
                                        <span className="text-sm font-bold text-white">Marcus Chen</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-semibold text-white">
                                        Personal email detected in code review prompt
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-black">
                                        MASKED
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 font-bold hover:underline text-sm">
                                        View Details
                                    </button>
                                </td>
                            </tr>

                            {/* Row 4 - Resolved */}
                            <tr className="hover:bg-black opacity-60">
                                <td className="px-6 py-4">
                                    <code className="text-sm font-bold text-blue-600">INC-38939</code>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-semibold text-white">Jan 18, 2026</p>
                                    <p className="text-xs font-semibold text-gray-300">11:45:21 PM</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-white">Credit Card</span>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant="critical" size="sm">CRITICAL</Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">EW</span>
                                        </div>
                                        <span className="text-sm font-bold text-white">Emma Wilson</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-semibold text-white">
                                        Credit card number in payment troubleshooting query
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-black">
                                        RESOLVED
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 font-bold hover:underline text-sm">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">
                        Showing 1-4 of 189 incidents
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border border-gray-800 rounded font-bold text-sm text-white hover:bg-zinc-900">
                            Previous
                        </button>
                        <button className="px-3 py-1 bg-blue-600 text-white rounded font-bold text-sm">1</button>
                        <button className="px-3 py-1 border border-gray-800 rounded font-bold text-sm text-white hover:bg-zinc-900">2</button>
                        <button className="px-3 py-1 border border-gray-800 rounded font-bold text-sm text-white hover:bg-zinc-900">3</button>
                        <span className="px-2 text-gray-300">...</span>
                        <button className="px-3 py-1 border border-gray-800 rounded font-bold text-sm text-white hover:bg-zinc-900">48</button>
                        <button className="px-3 py-1 border border-gray-800 rounded font-bold text-sm text-white hover:bg-zinc-900">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
