'use client';

import { useState } from 'react';

export default function RulesLibraryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const rules = [
        {
            id: 1,
            name: 'AWS Access Key Detection',
            category: 'API Keys & Secrets',
            description: 'Detects AWS access keys (AKIA...) to prevent cloud credential leakage',
            pattern: 'AKIA[0-9A-Z]{16}',
            severity: 'CRITICAL',
            enabled: true,
            detections: 342
        },
        {
            id: 2,
            name: 'Social Security Number (SSN)',
            category: 'Personal Identifiable Info',
            description: 'Identifies SSN patterns in formats XXX-XX-XXXX or XXXXXXXXX',
            pattern: '\\b\\d{3}-\\d{2}-\\d{4}\\b',
            severity: 'HIGH',
            enabled: true,
            detections: 127
        },
        {
            id: 3,
            name: 'Credit Card Numbers',
            category: 'Financial Data',
            description: 'Detects Visa, Mastercard, Amex, and Discover card numbers',
            pattern: '\\b\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}\\b',
            severity: 'CRITICAL',
            enabled: true,
            detections: 89
        },
        {
            id: 4,
            name: 'Email Addresses',
            category: 'Personal Identifiable Info',
            description: 'Matches valid email address formats to mask user contact info',
            pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
            severity: 'MEDIUM',
            enabled: true,
            detections: 1852
        },
        {
            id: 5,
            name: 'GitHub Personal Access Token',
            category: 'API Keys & Secrets',
            description: 'Identifies GitHub PATs (ghp_, gho_, ghu_, ghs_, ghr_ prefixes)',
            pattern: 'gh[pousr]_[A-Za-z0-9]{36}',
            severity: 'HIGH',
            enabled: true,
            detections: 56
        },
        {
            id: 6,
            name: 'IPv4 Addresses',
            category: 'Network Information',
            description: 'Detects standard IPv4 addresses in network configs and logs',
            pattern: '\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b',
            severity: 'LOW',
            enabled: false,
            detections: 423
        },
    ];

    const categories = ['all', 'API Keys & Secrets', 'Personal Identifiable Info', 'Financial Data', 'Network Information'];

    const filteredRules = selectedCategory === 'all'
        ? rules
        : rules.filter(rule => rule.category === selectedCategory);

    return (
        <div>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-white mb-2">Predefined Rules Library</h1>
                <p className="text-base font-semibold text-white">
                    Manage enterprise-standard detection rules to mask sensitive information
                </p>
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
                    <p className="text-3xl font-black text-white mb-1">94</p>
                    <p className="text-sm font-bold text-gray-300">Total Rules</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">78</p>
                    <p className="text-sm font-bold text-gray-300">Active Rules</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">2,891</p>
                    <p className="text-sm font-bold text-gray-300">Total Detections</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">12</p>
                    <p className="text-sm font-bold text-gray-300">Categories</p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6 flex items-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${selectedCategory === cat
                                ? 'bg-blue-600 text-white'
                                : 'bg-black border border-gray-800 text-white hover:bg-zinc-900'
                            }`}
                    >
                        {cat === 'all' ? 'All Rules' : cat}
                    </button>
                ))}
            </div>

            {/* Rules Grid */}
            <div className="grid grid-cols-1 gap-4">
                {filteredRules.map((rule) => (
                    <div key={rule.id} className="bg-black border border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-lg font-black text-white">{rule.name}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-black ${rule.severity === 'CRITICAL' ? 'bg-red-100 text-red-800' :
                                            rule.severity === 'HIGH' ? 'bg-orange-100 text-orange-800' :
                                                rule.severity === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-blue-100 text-blue-800'
                                        }`}>
                                        {rule.severity}
                                    </span>
                                    {rule.enabled && (
                                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-black">
                                            ENABLED
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm font-semibold text-white mb-3">{rule.description}</p>

                                {/* Pattern */}
                                <div className="bg-black border border-gray-800 rounded-lg p-3 mb-3">
                                    <p className="text-xs font-black text-gray-300 mb-1">REGEX PATTERN</p>
                                    <code className="text-sm font-bold text-white font-mono">{rule.pattern}</code>
                                </div>

                                {/* Metadata */}
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <span className="text-sm font-bold text-white">{rule.category}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <span className="text-sm font-bold text-white">{rule.detections} detections</span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2">
                                <button
                                    className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${rule.enabled ? 'bg-green-600' : 'bg-gray-300'
                                        }`}
                                >
                                    <span className={`inline-block w-4 h-4 transform transition-transform bg-black rounded-full ${rule.enabled ? 'translate-x-6' : 'translate-x-1'
                                        }`} />
                                </button>
                                <button className="p-2 text-white hover:bg-zinc-900 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add New Rule Button */}
            <div className="mt-6">
                <button className="w-full px-6 py-4 border-2 border-dashed border-gray-800 rounded-xl font-bold text-white hover:bg-black hover:border-blue-600 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create Custom Rule
                </button>
            </div>
        </div>
    );
}
