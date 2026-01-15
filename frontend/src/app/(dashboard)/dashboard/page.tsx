'use client';

import { ArrowTrendingUpIcon, ShieldExclamationIcon, BoltIcon } from '@heroicons/react/24/outline';
import StatCard from '@/app/components/shared/StatCard';
import Badge from '@/app/components/shared/Badge';
import Link from 'next/link';

export default function DashboardPage() {
    return (
        <div>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard Overview</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Monitor your security posture and prompt scanning activity.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                    title="Total Scans"
                    value="1,284"
                    trend={{ value: '23%', isPositive: true }}
                    subtitle="Past 30 days performance"
                    icon={<ArrowTrendingUpIcon className="w-6 h-6 text-blue-600" />}
                    iconBgColor="bg-blue-100 dark:bg-blue-900/30"
                />
                <StatCard
                    title="Sensitive Data Detected"
                    value="42"
                    trend={{ value: '8%', isPositive: false }}
                    subtitle="Individual entries masked"
                    icon={<ShieldExclamationIcon className="w-6 h-6 text-red-600" />}
                    iconBgColor="bg-red-100 dark:bg-red-900/30"
                />
                <StatCard
                    title="System Health"
                    value="99.9%"
                    subtitle="API Response: 142ms avg"
                    icon={<BoltIcon className="w-6 h-6 text-green-600" />}
                    iconBgColor="bg-green-100 dark:bg-green-900/30"
                />
            </div>

            {/* Risk Distribution Chart */}
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-6 shadow-card mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Risk Distribution</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Security threats categorized by severity level</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Last 7 Days</span>
                </div>

                {/* Simple Bar Chart */}
                <div className="flex items-end justify-around h-64 gap-8">
                    {/* Critical */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gradient-to-t from-red-500 to-red-300 rounded-t-lg" style={{ height: '30%' }}></div>
                        <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Critical</p>
                        <p className="text-xs text-gray-500">12</p>
                    </div>

                    {/* High */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-lg" style={{ height: '55%' }}></div>
                        <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-300">High</p>
                        <p className="text-xs text-gray-500">33</p>
                    </div>

                    {/* Medium */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-t-lg" style={{ height: '85%' }}></div>
                        <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Medium</p>
                        <p className="text-xs text-gray-500">54</p>
                    </div>

                    {/* Low */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg" style={{ height: '45%' }}></div>
                        <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Low</p>
                        <p className="text-xs text-gray-500">28</p>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-200 dark:border-dark-border">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">12 Critical</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">33 High</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">54 Medium</span>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-6 shadow-card">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Activity</h2>
                    <Link href="/logs" className="text-sm text-primary hover:text-primary-hover font-medium">
                        View All →
                    </Link>
                </div>

                {/* Activity List */}
                <div className="space-y-4">
                    {/* Activity Item 1 */}
                    <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-lg">
                        <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-red-600 dark:text-red-400 font-bold text-sm">!</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Sensitive Data Found in Prompt #4821</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">"Help me debug this AWS configuration..."</p>
                            <div className="flex items-center gap-2 mt-2">
                                <Badge variant="critical" size="sm">API Key Detected</Badge>
                                <span className="text-xs text-gray-500">2 min ago</span>
                            </div>
                        </div>
                        <Badge variant="critical">BLOCKED</Badge>
                    </div>

                    {/* Activity Item 2 */}
                    <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 rounded-r-lg">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 dark:text-green-400 font-bold text-sm">✓</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Clean Scan: Prompt #4810</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">"Refactor this Python class..."</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs text-gray-500">14 min ago</span>
                            </div>
                        </div>
                        <Badge variant="safe">PASSED</Badge>
                    </div>

                    {/* Activity Item 3 */}
                    <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500 rounded-r-lg">
                        <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">⚠</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Data Masked in Prompt #4818</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">"Analyze customer ticket from john.doe@..."</p>
                            <div className="flex items-center gap-2 mt-2">
                                <Badge variant="medium" size="sm">Email</Badge>
                                <span className="text-xs text-gray-500">45 min ago</span>
                            </div>
                        </div>
                        <Badge variant="warning">MASKED</Badge>
                    </div>
                </div>

                {/* Download Report */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-border text-center">
                    <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary font-medium">
                        Download activity report (CSV)
                    </button>
                </div>
            </div>
        </div>
    );
}
