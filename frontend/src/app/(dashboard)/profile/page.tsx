'use client';

export default function ProfilePage() {
    return (
        <div>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-white mb-2">User Profile Settings</h1>
                <p className="text-base font-semibold text-white">
                    Manage your personal information, security preferences, and access levels.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Sidebar Menu */}
                <div className="lg:col-span-1">
                    <div className="bg-black border border-gray-800 rounded-xl p-4">
                        <nav className="space-y-1">
                            <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-bold text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Account
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-900 rounded-lg font-bold text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Security
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-900 rounded-lg font-bold text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Integrations
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-900 rounded-lg font-bold text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Audit Logs
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-black border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-black text-white mb-6">Personal Information</h2>

                        <div className="flex items-start gap-6 mb-6">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-black text-3xl">AR</span>
                                </div>
                                <button className="mt-3 w-full px-4 py-2 border border-gray-800 rounded-lg font-bold text-sm text-white hover:bg-zinc-900">
                                    Change Avatar
                                </button>
                            </div>

                            {/* Name and Email */}
                            <div className="flex-1">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-black text-white">Alex Rivera</h3>
                                    </div>
                                    <p className="text-sm font-bold text-gray-300">Administrator & Security Lead</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-black text-white mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Alex Rivera"
                                            className="w-full px-4 py-2 border border-gray-800 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-white mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            defaultValue="alex.rivera@scangu​ard.ai"
                                            className="w-full px-4 py-2 border border-gray-800 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
                                        Save Profile Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Section */}
                    <div className="bg-black border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-black text-white mb-6">Security</h2>

                        {/* Password */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-base font-black text-white">Password</h3>
                                    <p className="text-sm font-semibold text-gray-300">Update your account password regularly for better security.</p>
                                </div>
                                <button className="px-4 py-2 border border-gray-800 rounded-lg font-bold text-sm text-white hover:bg-zinc-900">
                                    Change Password
                                </button>
                            </div>
                        </div>

                        {/* Two-Factor Authentication */}
                        <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-black text-white">Two-Factor Authentication (2FA)</h3>
                                        <p className="text-sm font-semibold text-white">Secure your account with an extra layer of protection.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-black">ENABLED</span>
                                    <button className="px-4 py-2 border border-gray-800 rounded-lg font-bold text-sm text-white hover:bg-zinc-900">
                                        Manage
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Roles & Permissions */}
                    <div className="bg-black border border-gray-800 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-black text-white">Roles & Permissions</h2>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-black">
                                CURRENT ROLE: ADMINISTRATOR
                            </span>
                        </div>

                        <p className="text-sm font-semibold text-white mb-6">
                            Your role determines what actions you can perform and what data you can access. These settings are managed by your organization's system owner.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Permission Cards */}
                            <div className="flex items-start gap-3 p-4 bg-black border border-gray-800 rounded-lg">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-white">PII Masking Control</h3>
                                    <p className="text-xs font-semibold text-gray-300">Full access to sensitive data identification and masking</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-black border border-gray-800 rounded-lg">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-white">Audit Log Access</h3>
                                    <p className="text-xs font-semibold text-gray-300">View and generate system audit logs for compliance</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-black border border-gray-800 rounded-lg">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-white">Manage Integrations</h3>
                                    <p className="text-xs font-semibold text-gray-300">Connect and disconnect external LLM providers and APIs</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-black border border-gray-800 rounded-lg">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-white">User Management</h3>
                                    <p className="text-xs font-semibold text-gray-300">Invite and manage users and assign organizational roles</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="bg-red-50 border border-red-300 rounded-xl p-6">
                        <h2 className="text-xl font-black text-red-900 mb-4">Danger Zone</h2>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-base font-black text-white mb-1">Permanently delete your account and associated data</h3>
                                <p className="text-sm font-semibold text-white">This action cannot be undone</p>
                            </div>
                            <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
