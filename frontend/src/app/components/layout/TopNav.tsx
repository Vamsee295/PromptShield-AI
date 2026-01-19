'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';
import UserMenu from './UserMenu';

export default function TopNav() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="h-16 bg-black border-b border-gray-800 flex items-center justify-between px-6">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
                <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search activity..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 font-bold"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 text-white hover:bg-zinc-900 rounded-lg transition-colors">
                    <BellIcon className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Menu */}
                <UserMenu />
            </div>
        </header>
    );
}
