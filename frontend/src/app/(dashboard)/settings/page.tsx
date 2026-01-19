'use client';

import { useState } from 'react';

export default function SettingsPage() {
    const [orgName, setOrgName] = useState('SecureAI Systems');
    const [dataRetention, setDataRetention] = useState('90');

    return (
        <div>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-white mb-2">Organization Settings</h1>
                <p className="text-base font-semibold text-white">
                    Configure organization details, masking preferences, and retention policies
                </p>
            </div>

            <div className="space-y-6">
                {/* Organization Information */}
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <h2 className="text-xl font-black text-white mb-6">Organization Information</h2>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-black text-white mb-2">Organization Name</label>
                            <input
                                type="text"
                                value={orgName}
                                onChange={(e) => setOrgName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-800 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-black text-white mb-2">Industry</label>
                            <select className="w-full px-4 py-2 border border-gray-800 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Technology</option>
                                <option>Healthcare</option>
                                <option>Finance</option>
                                <option>Education</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-black text-white mb-2">Organization ID</label>
                            <input
                                type="text"
                                value="org_2c9k3zdA8"
                                disabled
                                className="w-full px-4 py-2 border border-gray-800 rounded-lg font-semibold text-gray-400 bg-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-black text-white mb-2">Billing Email</label>
                            <input
                                type="email"
                                defaultValue="billing@secureai.com"
                                className="w-full px-4 py-2 border border-gray-800 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
                            Save Changes
                        </button>
                    </div>
                </div>

                {/* Masking Preferences */}
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <h2 className="text-xl font-black text-white mb-6">Masking Preferences</h2>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-black border border-gray-800 rounded-lg">
                            <div>
                                <h3 className="text-base font-black text-white mb-1">Mask Character</h3>
                                <p className="text-sm font-semibold text-white">Default character used to replace sensitive data</p>
                            </div>
                            <select className="px-4 py-2 border border-gray-800 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>* (Asterisk)</option>
                                <option># (Hash)</option>
                                <option>X (X Character)</option>
                                <option>█ (Block)</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-black border border-gray-800 rounded-lg">
                            <div>
                                <h3 className="text-base font-black text-white mb-1">Show Partial Data</h3>
                                <p className="text-sm font-semibold text-white">Display first/last characters of masked data (e.g., **** 4242)</p>
                            </div>
                            <button className="relative inline-flex items-center h-7 rounded-full w-14 bg-green-600">
                                <span className="inline-block w-5 h-5 transform transition-transform bg-black rounded-full translate-x-8" />
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-black border border-gray-800 rounded-lg">
                            <div>
                                <h3 className="text-base font-black text-white mb-1">Preserve Data Length</h3>
                                <p className="text-sm font-semibold text-white">Replace each character with mask (1:1 replacement)</p>
                            </div>
                            <button className="relative inline-flex items-center h-7 rounded-full w-14 bg-gray-300">
                                <span className="inline-block w-5 h-5 transform transition-transform bg-black rounded-full translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Data Retention */}
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <h2 className="text-xl font-black text-white mb-6">Data Retention & Privacy</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-black text-white mb-2">Scan Log Retention Period</label>
                            <select
                                value={dataRetention}
                                onChange={(e) => setDataRetention(e.target.value)}
                                className="w-full max-w-xs px-4 py-2 border border-gray-800 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="30">30 days</option>
                                <option value="60">60 days</option>
                                <option value="90">90 days (Recommended)</option>
                                <option value="180">180 days</option>
                                <option value="365">1 year</option>
                            </select>
                            <p className="mt-2 text-sm font-semibold text-gray-300">
                                Logs older than {dataRetention} days will be automatically deleted
                            </p>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-300 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base font-black text-white">Zero Raw Prompt Storage</h3>
                                    <p className="text-sm font-semibold text-white">Original prompts are never stored, only metadata and scan results</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-black">
                                ENABLED
                            </span>
                        </div>
                    </div>
                </div>

                {/* API & Webhooks */}
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <h2 className="text-xl font-black text-white mb-6">API & Webhooks</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-black text-white mb-2">API Key</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="password"
                                    value="sk_live_abc123xyz789"
                                    disabled
                                    className="flex-1 px-4 py-2 border border-gray-800 rounded-lg font-mono text-sm text-white bg-black"
                                />
                                <button className="px-4 py-2 border border-gray-800 rounded-lg font-bold text-sm text-white hover:bg-zinc-900">
                                    Reveal
                                </button>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700">
                                    Rotate Key
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-black text-white mb-2">Webhook URL (Optional)</label>
                            <input
                                type="url"
                                placeholder="https://your-domain.com/webhook"
                                className="w-full px-4 py-2 border border-gray-800 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="mt-2 text-sm font-semibold text-gray-300">
                                Receive real-time alerts when sensitive data is detected
                            </p>
                        </div>
                    </div>
                </div>

                {/* Compliance */}
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <h2 className="text-xl font-black text-white mb-6">Compliance & Certifications</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-300 rounded-lg">
                            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className="text-sm font-black text-white mb-1">SOC 2 Type II Certified</h3>
                                <p className="text-xs font-semibold text-white">Valid until: Dec 2026</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-300 rounded-lg">
                            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className="text-sm font-black text-white mb-1">GDPR Compliant</h3>
                                <p className="text-xs font-semibold text-white">EU Data Protection</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-300 rounded-lg">
                            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className="text-sm font-black text-white mb-1">HIPAA Compliant</h3>
                                <p className="text-xs font-semibold text-white">Healthcare Data Protection</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-300 rounded-lg">
                            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className="text-sm font-black text-white mb-1">AES-256 Encryption</h3>
                                <p className="text-xs font-semibold text-white">Data at rest & in transit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
