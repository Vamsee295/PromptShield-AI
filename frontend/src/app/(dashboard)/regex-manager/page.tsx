'use client';

import { useState } from 'react';

export default function RegexManagerPage() {
    const [testInput, setTestInput] = useState('');
    const [currentPattern, setCurrentPattern] = useState('\\b\\d{3}-\\d{2}-\\d{4}\\b');
    const [patternName, setPatternName] = useState('Social Security Number (SSN)');
    const [matches, setMatches] = useState<string[]>([]);

    const testPattern = () => {
        try {
            const regex = new RegExp(currentPattern, 'g');
            const found = testInput.match(regex);
            setMatches(found || []);
        } catch (error) {
            setMatches([]);
        }
    };

    const savedPatterns = [
        {
            id: 1,
            name: 'Social Security Number (SSN)',
            pattern: '\\b\\d{3}-\\d{2}-\\d{4}\\b',
            category: 'PII',
            lastUsed: '2 hours ago'
        },
        {
            id: 2,
            name: 'AWS Access Key',
            pattern: 'AKIA[0-9A-Z]{16}',
            category: 'API Keys',
            lastUsed: '5 hours ago'
        },
        {
            id: 3,
            name: 'Email Address',
            pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
            category: 'PII',
            lastUsed: '1 day ago'
        },
    ];

    return (
        <div>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-white mb-2">Custom Regex Manager</h1>
                <p className="text-base font-bold text-gray-300">
                    Create and test custom detection patterns for sensitive data
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left - Pattern Editor */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Pattern Builder */}
                    <div className="bg-black border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-black text-white mb-6">Pattern Builder</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-black text-white mb-2">Pattern Name</label>
                                <input
                                    type="text"
                                    value={patternName}
                                    onChange={(e) => setPatternName(e.target.value)}
                                    placeholder="e.g., Credit Card Number"
                                    className="w-full px-4 py-2 border border-gray-800 rounded-lg font-bold text-white bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-black text-white mb-2">Regular Expression Pattern</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={currentPattern}
                                        onChange={(e) => setCurrentPattern(e.target.value)}
                                        placeholder="Enter regex pattern..."
                                        className="w-full px-4 py-3 border border-gray-800 rounded-lg font-mono text-sm text-white bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <span className="px-2 py-1 bg-black border border-gray-700 text-white text-xs font-black rounded">
                                            REGEX
                                        </span>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs font-bold text-gray-400">
                                    Use standard JavaScript regex syntax. Example: \b\d{3}-\d{2}-\d{4}\b for SSN
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-black text-white mb-2">Category</label>
                                <select className="w-full px-4 py-2 border border-gray-800 rounded-lg font-bold text-white bg-black focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Personal Identifiable Info (PII)</option>
                                    <option>API Keys & Secrets</option>
                                    <option>Financial Data</option>
                                    <option>Network Information</option>
                                    <option>Healthcare Data</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
                                    Save Pattern
                                </button>
                                <button className="px-6 py-3 border border-gray-800 rounded-lg font-bold text-white hover:bg-zinc-900">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Live Tester */}
                    <div className="bg-black border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-black text-white mb-6">Live Pattern Tester</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-black text-white mb-2">Test Input</label>
                                <textarea
                                    value={testInput}
                                    onChange={(e) => setTestInput(e.target.value)}
                                    placeholder="Paste or type text to test your pattern against..."
                                    rows={8}
                                    className="w-full px-4 py-3 border border-gray-800 rounded-lg font-mono text-sm text-white bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder-gray-500"
                                />
                                <p className="mt-2 text-xs font-bold text-gray-400">
                                    Example: "My SSN is 123-45-6789 and email is john@example.com"
                                </p>
                            </div>

                            <button
                                onClick={testPattern}
                                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                Run Test
                            </button>

                            {/* Results */}
                            {testInput && (
                                <div className="bg-black border border-gray-800 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-sm font-black text-white">Test Results</h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-black ${matches.length > 0
                                            ? 'bg-green-600 text-white'
                                            : 'bg-gray-900 text-white border border-gray-800'
                                            }`}>
                                            {matches.length} {matches.length === 1 ? 'MATCH' : 'MATCHES'}
                                        </span>
                                    </div>

                                    {matches.length > 0 ? (
                                        <div className="space-y-2">
                                            {matches.map((match, idx) => (
                                                <div key={idx} className="bg-black border border-gray-800 rounded-lg p-3">
                                                    <div className="flex items-center justify-between">
                                                        <code className="text-sm font-bold text-blue-400 font-mono">{match}</code>
                                                        <span className="text-xs font-bold text-gray-400">Match #{idx + 1}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-sm font-bold text-gray-400 text-center py-4">
                                            No matches found. Try adjusting your pattern or test input.
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right - Saved Patterns */}
                <div className="lg:col-span-1">
                    <div className="bg-black border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-black text-white mb-6">Saved Patterns</h2>

                        <div className="space-y-3">
                            {savedPatterns.map((pattern) => (
                                <button
                                    key={pattern.id}
                                    onClick={() => {
                                        setPatternName(pattern.name);
                                        setCurrentPattern(pattern.pattern);
                                    }}
                                    className="w-full text-left p-4 border border-gray-800 rounded-lg hover:bg-zinc-900 transition-colors"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-sm font-black text-white">{pattern.name}</h3>
                                        <span className="px-2 py-1 bg-black border border-gray-700 text-white rounded text-xs font-black">
                                            {pattern.category}
                                        </span>
                                    </div>
                                    <code className="text-xs font-mono text-gray-300 block mb-2 break-all">
                                        {pattern.pattern}
                                    </code>
                                    <p className="text-xs font-bold text-gray-400">
                                        Last used: {pattern.lastUsed}
                                    </p>
                                </button>
                            ))}
                        </div>

                        <button className="w-full mt-4 px-4 py-2 border-2 border-dashed border-gray-800 rounded-lg font-bold text-sm text-white hover:bg-zinc-900 hover:border-blue-500">
                            Load More Patterns
                        </button>
                    </div>

                    {/* Quick Reference */}
                    <div className="mt-6 bg-black border border-gray-800 rounded-xl p-6">
                        <h3 className="text-sm font-black text-white mb-4">Regex Quick Reference</h3>
                        <div className="space-y-2 text-xs font-bold text-gray-300">
                            <div className="flex items-center gap-2">
                                <code className="px-2 py-1 bg-black border border-gray-700 rounded font-mono text-blue-400">\d</code>
                                <span>Any digit (0-9)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="px-2 py-1 bg-black border border-gray-700 rounded font-mono text-blue-400">\w</code>
                                <span>Word character</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="px-2 py-1 bg-black border border-gray-700 rounded font-mono text-blue-400">\s</code>
                                <span>Whitespace</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="px-2 py-1 bg-black border border-gray-700 rounded font-mono text-blue-400">\b</code>
                                <span>Word boundary</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="px-2 py-1 bg-black border border-gray-700 rounded font-mono text-blue-400">+</code>
                                <span>One or more</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="px-2 py-1 bg-black border border-gray-700 rounded font-mono text-blue-400">*</code>
                                <span>Zero or more</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="px-2 py-1 bg-black border border-gray-700 rounded font-mono text-blue-400">?</code>
                                <span>Optional</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <code className="px-2 py-1 bg-black border border-gray-700 rounded font-mono text-blue-400">{'{n}'}</code>
                                <span>Exactly n times</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
