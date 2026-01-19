'use client';

import { useState } from 'react';

export default function IntegrationsPage() {
    const [showAddModal, setShowAddModal] = useState(false);

    const integrations = [
        {
            id: 1,
            name: 'OpenAI GPT-4',
            provider: 'OpenAI',
            type: 'LLM Provider',
            status: 'connected',
            apiCalls: '24,891',
            lastUsed: '2 minutes ago',
            logo: '🤖'
        },
        {
            id: 2,
            name: 'Anthropic Claude',
            provider: 'Anthropic',
            type: 'LLM Provider',
            status: 'connected',
            apiCalls: '12,450',
            lastUsed: '15 minutes ago',
            logo: '🎭'
        },
        {
            id: 3,
            name: 'Slack Notifications',
            provider: 'Slack',
            type: 'Messaging',
            status: 'connected',
            apiCalls: '342',
            lastUsed: '1 hour ago',
            logo: '💬'
        },
        {
            id: 4,
            name: 'GitHub Copilot',
            provider: 'GitHub',
            type: 'Code Assistant',
            status: 'disconnected',
            apiCalls: '0',
            lastUsed: 'Never',
            logo: '🐙'
        },
    ];

    const availableIntegrations = [
        { name: 'Google Gemini', category: 'LLM Provider', logo: '✨' },
        { name: 'Microsoft Teams', category: 'Messaging', logo: '👥' },
        { name: 'PagerDuty', category: 'Alerting', logo: '🚨' },
        { name: 'Datadog', category: 'Monitoring', logo: '📊' },
        { name: 'AWS Bedrock', category: 'LLM Provider', logo: '☁️' },
        { name: 'Splunk', category: 'Log Management', logo: '🔍' },
    ];

    return (
        <div>
            {/* Page Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white mb-2">Integrations</h1>
                    <p className="text-base font-semibold text-white">
                        Connect PromptShield to APIs, internal apps, and LLM gateways
                    </p>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Integration
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">3</p>
                    <p className="text-sm font-bold text-gray-300">Active Integrations</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">37,683</p>
                    <p className="text-sm font-bold text-gray-300">Total API Calls</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">98.5%</p>
                    <p className="text-sm font-bold text-gray-300">Success Rate</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">142ms</p>
                    <p className="text-sm font-bold text-gray-300">Avg Response Time</p>
                </div>
            </div>

            {/* Connected Integrations */}
            <div className="mb-8">
                <h2 className="text-2xl font-black text-white mb-6">Connected Integrations</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {integrations.filter(i => i.status === 'connected').map((integration) => (
                        <div key={integration.id} className="bg-black border border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl">
                                        {integration.logo}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white mb-1">{integration.name}</h3>
                                        <p className="text-sm font-semibold text-gray-300">{integration.provider}</p>
                                        <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-black">
                                            {integration.type}
                                        </span>
                                    </div>
                                </div>

                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-black flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    CONNECTED
                                </span>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-black border border-gray-800 rounded-lg">
                                <div>
                                    <p className="text-xs font-black text-gray-300 mb-1">API CALLS</p>
                                    <p className="text-lg font-black text-white">{integration.apiCalls}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-300 mb-1">LAST USED</p>
                                    <p className="text-sm font-bold text-white">{integration.lastUsed}</p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2">
                                <button className="flex-1 px-4 py-2 border border-gray-800 rounded-lg font-bold text-sm text-white hover:bg-zinc-900">
                                    Configure
                                </button>
                                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700">
                                    View Logs
                                </button>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700">
                                    Disconnect
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Available Integrations */}
            <div>
                <h2 className="text-2xl font-black text-white mb-6">Available Integrations</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {availableIntegrations.map((integration, idx) => (
                        <button
                            key={idx}
                            className="bg-black border-2 border-dashed border-gray-800 rounded-xl p-6 hover:border-blue-600 hover:bg-black transition-colors text-center"
                        >
                            <div className="text-4xl mb-3">{integration.logo}</div>
                            <h3 className="text-sm font-black text-white mb-1">{integration.name}</h3>
                            <p className="text-xs font-semibold text-gray-300">{integration.category}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Add Integration Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-black rounded-xl p-8 w-full max-w-2xl border border-gray-800 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-black text-white">Add New Integration</h2>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="text-gray-300 hover:text-white"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-black text-white mb-2">Integration Type</label>
                                <select className="w-full px-4 py-2 border border-gray-800 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>LLM Provider</option>
                                    <option>Messaging Platform</option>
                                    <option>Monitoring Service</option>
                                    <option>Webhook</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-black text-white mb-2">Provider</label>
                                <select className="w-full px-4 py-2 border border-gray-800 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>OpenAI</option>
                                    <option>Anthropic</option>
                                    <option>Google</option>
                                    <option>Custom/Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-black text-white mb-2">API Endpoint</label>
                                <input
                                    type="url"
                                    placeholder="https://api.example.com/v1"
                                    className="w-full px-4 py-2 border border-gray-800 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-black text-white mb-2">API Key</label>
                                <input
                                    type="password"
                                    placeholder="sk_live_..."
                                    className="w-full px-4 py-2 border border-gray-800 rounded-lg font-mono text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-sm font-bold text-white mb-1">Security Notice</p>
                                        <p className="text-xs font-semibold text-white">
                                            API credentials are encrypted at rest using AES-256 and never logged or exposed in plaintext.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mt-6">
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="flex-1 px-6 py-3 border border-gray-800 rounded-lg font-bold text-white hover:bg-zinc-900"
                            >
                                Cancel
                            </button>
                            <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
                                Connect Integration
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
