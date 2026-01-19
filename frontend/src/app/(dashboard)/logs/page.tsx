'use client';

import StatCard from '@/app/components/shared/StatCard';
import Badge from '@/app/components/shared/Badge';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function LogsPage() {
    const [filter, setFilter] = useState('all');

    return (
        <div>
            {/* Page Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white dark:text-white mb-2">Scan Logs</h1>
                    <p className="text-gray-300 dark:text-gray-400">
                        Audit trail of all prompt scans and security findings
                    </p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover font-semibold">
                    Export CSV
                </button>
            </div>

            {/* Stats (Dark Mode) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                    title="Total Scans Today"
                    value="1,240"
                    trend={{ value: '12% FROM YESTERDAY', isPositive: true }}
                    iconBgColor="bg-blue-900/30"
                />
                <StatCard
                    title="High Risk Detected"
                    value="42"
                    trend={{ value: '6% CRITICAL ITEMS', isPositive: false }}
                    iconBgColor="bg-red-900/30"
                />
                <StatCard
                    title="Data Points Masked"
                    value="3,891"
                    trend={{ value: '2% DATA LEAKAGE', isPositive: true }}
                    iconBgColor="bg-yellow-900/30"
                />
            </div>

            {/* Filter Bar */}
            <div className="bg-black dark:bg-dark-card border border-gray-800 dark:border-dark-border rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                    <Badge variant="high" size="sm">
                        <span className="flex items-center gap-1">
                            PII Detected
                            <button className="ml-1 hover:text-red-900">×</button>
                        </span>
                    </Badge>
                    <Badge variant="critical" size="sm">
                        <span className="flex items-center gap-1">
                            Severity: Critical
                            <button className="ml-1 hover:text-red-900">×</button>
                        </span>
                    </Badge>
                    <button className="text-sm text-gray-400 hover:text-primary">Clear all filters</button>
                </div>

                <div className="flex items-center gap-3">
                    <select className="px-3 py-2 bg-black dark:bg-slate-700 border border-gray-800 dark:border-dark-border rounded-lg text-sm">
                        <option>Last 24h</option>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                    </select>
                    <select className="px-3 py-2 bg-black dark:bg-slate-700 border border-gray-800 dark:border-dark-border rounded-lg text-sm">
                        <option>Risk: All</option>
                        <option>Critical</option>
                        <option>High</option>
                        <option>Medium</option>
                    </select>
                    <select className="px-3 py-2 bg-black dark:bg-slate-700 border border-gray-800 dark:border-dark-border rounded-lg text-sm">
                        <option>Source: API/Web</option>
                        <option>API</option>
                        <option>Web</option>
                    </select>
                </div>
            </div>

            {/* Audit Logs Table */}
            <div className="bg-black dark:bg-dark-card border border-gray-800 dark:border-dark-border rounded-xl overflow-hidden shadow-card">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-black dark:bg-slate-800 border-b border-gray-800 dark:border-dark-border">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 dark:text-gray-400 uppercase tracking-wider">
                                    Timestamp
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 dark:text-gray-400 uppercase tracking-wider">
                                    Source
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 dark:text-gray-400 uppercase tracking-wider">
                                    Detected Items
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 dark:text-gray-400 uppercase tracking-wider">
                                    Risk Level
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 dark:text-gray-400 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-dark-border">
                            {/* Row 1 */}
                            <tr className="hover:bg-black dark:hover:bg-slate-700/50">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-white dark:text-white">Oct 27, 14:22:01</div>
                                    <div className="text-xs text-gray-400">ID: scan_2c9k3zd</div>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant="info" size="sm">API</Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="critical" size="sm">AWS Secret</Badge>
                                        <Badge variant="medium" size="sm">Personal Email</Badge>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-sm font-semibold text-red-600 dark:text-red-400">Critical</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-sm text-primary hover:text-primary-hover font-medium">
                                        View Details
                                    </button>
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="hover:bg-black dark:hover:bg-slate-700/50">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-white dark:text-white">Oct 27, 14:15:30</div>
                                    <div className="text-xs text-gray-400">ID: scan_1c9h23p</div>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant="success" size="sm">WEB</Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="warning" size="sm">Credit Card</Badge>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                        <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">Warning</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-sm text-primary hover:text-primary-hover font-medium">
                                        View Details
                                    </button>
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr className="hover:bg-black dark:hover:bg-slate-700/50">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-white dark:text-white">Oct 27, 14:10:12</div>
                                    <div className="text-xs text-gray-400">ID: scan_1q9832x</div>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant="info" size="sm">API</Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-400 italic">No threats detected</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">Safe</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-sm text-primary hover:text-primary-hover font-medium">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 bg-black dark:bg-slate-800 border-t border-gray-800 dark:border-dark-border flex items-center justify-between">
                    <span className="text-sm text-gray-300 dark:text-gray-400">
                        Showing 1-50 of 1,240 logs
                    </span>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 text-sm border border-gray-800 dark:border-dark-border rounded hover:bg-zinc-900 dark:hover:bg-slate-700">
                            Previous
                        </button>
                        <button className="px-3 py-1 text-sm bg-primary text-white rounded">1</button>
                        <button className="px-3 py-1 text-sm border border-gray-800 dark:border-dark-border rounded hover:bg-zinc-900 dark:hover:bg-slate-700">2</button>
                        <button className="px-3 py-1 text-sm border border-gray-800 dark:border-dark-border rounded hover:bg-zinc-900 dark:hover:bg-slate-700">3</button>
                        <span className="px-2">...</span>
                        <button className="px-3 py-1 text-sm border border-gray-800 dark:border-dark-border rounded hover:bg-zinc-900 dark:hover:bg-slate-700">25</button>
                        <button className="px-3 py-1 text-sm border border-gray-800 dark:border-dark-border rounded hover:bg-zinc-900 dark:hover:bg-slate-700">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
