'use client';

import { useState } from 'react';

export default function TeamPage() {
    const [showInviteModal, setShowInviteModal] = useState(false);

    return (
        <div>
            {/* Page Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white mb-2">Team Management</h1>
                    <p className="text-base font-semibold text-white">
                        Manage user access and security permissions for your organization
                    </p>
                </div>
                <button
                    onClick={() => setShowInviteModal(true)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Invite User
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-black text-gray-300 uppercase">Total Users</h3>
                    </div>
                    <p className="text-3xl font-black text-white">28</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-black text-gray-300 uppercase">Active Users</h3>
                    </div>
                    <p className="text-3xl font-black text-white">24</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-black text-gray-300 uppercase">Pending Invites</h3>
                    </div>
                    <p className="text-3xl font-black text-white">3</p>
                </div>

                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-black text-gray-300 uppercase">Admin Roles</h3>
                    </div>
                    <p className="text-3xl font-black text-white">5</p>
                </div>
            </div>

            {/* Team Table */}
            <div className="bg-black border border-gray-800 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-black text-white">Team Members</h2>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search users..."
                                    className="pl-10 pr-4 py-2 border border-gray-800 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <select className="px-4 py-2 border border-gray-800 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>All Roles</option>
                                <option>Administrator</option>
                                <option>Security Analyst</option>
                                <option>Viewer</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-black border-b border-gray-800">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">User</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Email</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Role</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Last Active</th>
                                <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {/* Row 1 - Admin */}
                            <tr className="hover:bg-black">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">AR</span>
                                        </div>
                                        <div>
                                            <p className="font-black text-white">Alex Rivera</p>
                                            <p className="text-sm font-semibold text-gray-300">You</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-bold text-white">alex.rivera@scanguard.ai</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-black">
                                        ADMINISTRATOR
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-black">
                                        ACTIVE
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-semibold text-white">Just now</p>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 font-bold hover:underline text-sm">
                                        Edit
                                    </button>
                                </td>
                            </tr>

                            {/* Row 2 - Security Analyst */}
                            <tr className="hover:bg-black">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">SB</span>
                                        </div>
                                        <div>
                                            <p className="font-black text-white">Sarah Black</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-bold text-white">sarah.black@scanguard.ai</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-black">
                                        SECURITY ANALYST
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-black">
                                        ACTIVE
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-semibold text-white">2 min ago</p>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <button className="text-blue-600 font-bold hover:underline text-sm">
                                            Edit
                                        </button>
                                        <button className="text-red-600 font-bold hover:underline text-sm">
                                            Remove
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 3 - Viewer */}
                            <tr className="hover:bg-black">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">MC</span>
                                        </div>
                                        <div>
                                            <p className="font-black text-white">Marcus Chen</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-bold text-white">marcus.chen@scanguard.ai</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-black">
                                        VIEWER
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-black">
                                        ACTIVE
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-semibold text-white">18 min ago</p>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <button className="text-blue-600 font-bold hover:underline text-sm">
                                            Edit
                                        </button>
                                        <button className="text-red-600 font-bold hover:underline text-sm">
                                            Remove
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 4 - Pending */}
                            <tr className="hover:bg-black">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">EW</span>
                                        </div>
                                        <div>
                                            <p className="font-black text-white">Emma Wilson</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-bold text-white">emma.wilson@scanguard.ai </p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-black">
                                        SECURITY ANALYST
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-black">
                                        PENDING
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-semibold text-white">Invited 2d ago</p>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <button className="text-blue-600 font-bold hover:underline text-sm">
                                            Resend
                                        </button>
                                        <button className="text-red-600 font-bold hover:underline text-sm">
                                            Cancel
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">
                        Showing 1-4 of 28 users
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border border-gray-800 rounded font-bold text-sm text-white hover:bg-zinc-900">
                            Previous
                        </button>
                        <button className="px-3 py-1 bg-blue-600 text-white rounded font-bold text-sm">1</button>
                        <button className="px-3 py-1 border border-gray-800 rounded font-bold text-sm text-white hover:bg-zinc-900">2</button>
                        <button className="px-3 py-1 border border-gray-800 rounded font-bold text-sm text-white hover:bg-zinc-900">3</button>
                        <span className="px-2 text-gray-300">...</span>
                        <button className="px-3 py-1 border border-gray-800 rounded font-bold text-sm text-white hover:bg-zinc-900">7</button>
                        <button className="px-3 py-1 border border-gray-800 rounded font-bold text-sm text-white hover:bg-zinc-900">
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Invite Modal */}
            {showInviteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-black rounded-xl p-8 w-full max-w-md border border-gray-800">
                        <h2 className="text-2xl font-black text-white mb-6">Invite New User</h2>

                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-sm font-black text-white mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="user@company.com"
                                    className="w-full px-4 py-2 border border-gray-800 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-black text-white mb-2">Role</label>
                                <select className="w-full px-4 py-2 border border-gray-800 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Security Analyst</option>
                                    <option>Administrator</option>
                                    <option>Viewer</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setShowInviteModal(false)}
                                className="flex-1 px-6 py-3 border border-gray-800 rounded-lg font-bold text-white hover:bg-zinc-900"
                            >
                                Cancel
                            </button>
                            <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
                                Send Invite
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
