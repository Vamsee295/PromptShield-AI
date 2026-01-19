'use client';

import { useState } from 'react';

export default function PoliciesPage() {
    const [policies, setPolicies] = useState([
        {
            id: 1,
            name: 'Block High-Risk PII',
            description: 'Automatically blocks prompts containing SSN, passport numbers, or medical records',
            action: 'BLOCK',
            enabled: true,
            totalBlocks: 342,
            categories: ['PII', 'Healthcare']
        },
        {
            id: 2,
            name: 'Mask Financial Data',
            description: 'Detects and masks credit card numbers, bank accounts, and routing numbers',
            action: 'MASK',
            enabled: true,
            totalBlocks: 189,
            categories: ['Financial']
        },
        {
            id: 3,
            name: 'Redact API Credentials',
            description: 'Removes AWS keys, GitHub tokens, and other API secrets from prompts',
            action: 'REDACT',
            enabled: true,
            totalBlocks: 567,
            categories: ['API Keys', 'Secrets']
        },
        {
            id: 4,
            name: 'Alert on IP Addresses',
            description: 'Triggers security alert when internal IP addresses are detected',
            action: 'ALERT',
            enabled: false,
            totalBlocks: 23,
            categories: ['Network']
        },
    ]);

    const togglePolicy = (id: number) => {
        setPolicies(policies.map(p =>
            p.id === id ? { ...p, enabled: !p.enabled } : p
        ));
    };

    return (
        <div>
            {/* Page Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white mb-2">Security Policies</h1>
                    <p className="text-base font-semibold text-white">
                        Configure automated rules to inspect, redact, and block prompts before they reach external LLM endpoints
                    </p>
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create New Policy
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">4</p>
                    <p className="text-sm font-bold text-gray-300">Active Policies</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">342</p>
                    <p className="text-sm font-bold text-gray-300">Total Blocks</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">756</p>
                    <p className="text-sm font-bold text-gray-300">Masked Entries</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">99.8%</p>
                    <p className="text-sm font-bold text-gray-300">Detection Rate</p>
                </div>
            </div>

            {/* Policy Cards */}
            <div className="space-y-4">
                {policies.map((policy) => (
                    <div key={policy.id} className="bg-black border border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between">
                            {/* Left Side - Policy Info */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <h2 className="text-xl font-black text-white">{policy.name}</h2>
                                    <span className={`px-3 py-1 rounded-full text-xs font-black ${policy.action === 'BLOCK' ? 'bg-red-100 text-red-800' :
                                            policy.action === 'MASK' ? 'bg-yellow-100 text-yellow-800' :
                                                policy.action === 'REDACT' ? 'bg-orange-100 text-orange-800' :
                                                    'bg-blue-100 text-blue-800'
                                        }`}>
                                        {policy.action}
                                    </span>
                                    {policy.enabled && (
                                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-black">
                                            ACTIVE
                                        </span>
                                    )}
                                </div>

                                <p className="text-base font-semibold text-white mb-4">
                                    {policy.description}
                                </p>

                                {/* Categories */}
                                <div className="flex items-center gap-2 mb-4">
                                    {policy.categories.map((cat, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-gray-100 text-white rounded-lg text-xs font-bold border border-gray-800">
                                            {cat}
                                        </span>
                                    ))}
                                </div>

                                {/* Stats Row */}
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <span className="text-sm font-bold text-white">{policy.totalBlocks} total actions</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm font-bold text-white">Last triggered: 12m ago</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Actions */}
                            <div className="flex flex-col items-end gap-3">
                                {/* Toggle Switch */}
                                <button
                                    onClick={() => togglePolicy(policy.id)}
                                    className={`relative inline-flex items-center h-7 rounded-full w-14 transition-colors ${policy.enabled ? 'bg-green-600' : 'bg-gray-300'
                                        }`}
                                >
                                    <span className={`inline-block w-5 h-5 transform transition-transform bg-black rounded-full ${policy.enabled ? 'translate-x-8' : 'translate-x-1'
                                        }`} />
                                </button>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2">
                                    <button className="px-4 py-2 border border-gray-800 rounded-lg font-bold text-sm text-white hover:bg-zinc-900 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        View Logs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Policy Templates */}
            <div className="mt-8">
                <h2 className="text-2xl font-black text-white mb-4">Quick Start Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="border-2 border-dashed border-gray-800 rounded-xl p-6 hover:border-blue-600 hover:bg-black transition-colors text-left">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-black text-white mb-2">HIPAA Compliance Template</h3>
                        <p className="text-sm font-semibold text-white">Pre-configured rules for healthcare data protection</p>
                    </button>

                    <button className="border-2 border-dashed border-gray-800 rounded-xl p-6 hover:border-blue-600 hover:bg-black transition-colors text-left">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-black text-white mb-2">GDPR Privacy Template</h3>
                        <p className="text-sm font-semibold text-white">EU data protection and PII masking policies</p>
                    </button>

                    <button className="border-2 border-dashed border-gray-800 rounded-xl p-6 hover:border-blue-600 hover:bg-black transition-colors text-left">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-black text-white mb-2">SOC 2 Security Template</h3>
                        <p className="text-sm font-semibold text-white">Enterprise security controls and audit trails</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
